import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://jobly-ian-dao-backend.onrender.com";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static token = null;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of all companies can filter on provided search filter  */
  static async getAllOrFilteredCompanies(name) {
    if (name === "") { name = undefined; }
    let res = await this.request(`companies/`, { name });
    return res.companies;
  }

  /** Get list of all jobs can filter on provided search filter */
  static async getAllOrFilteredJobs(title) {
    if (title === "") { title = undefined; }
    let res = await this.request(`jobs/`, { title });
    return res.jobs;
  }

  /**Register a new user
   * takes userData: { username, password, firstName, lastName, email },
   * returns and updates token */
  static async signUp(userData) {
    let res = await this.request("auth/register", userData, "post");
    this.token = res.token;
    return this.token;
  }

  /**Login an already registered user
   * takes userData: {username, password}
   * return and update token
   */
  static async logIn(userData) {
    let res = await this.request("auth/token", userData, "post");
    this.token = res.token;
    return this.token;
  }

  /** logs user out and sets this.token to null */
  static logOut() {
    this.token = null;
    return this.token;
  }

  /** Returns a user from the API given a username.
   *  User must be logged in.
   */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
  /**takes user data and calls api to update user info.
   * takes userData: {firstName, lastName, email}
   * User must be logged in.
   */
  static async updateUser(userData) {
    const { firstName, lastName, email } = userData;
    let res = await this.request(
      `users/${userData.username}`,
      { firstName, lastName, email },
      "patch"
    );
    return res.user;
  }

}

export default JoblyApi;
