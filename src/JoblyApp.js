import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwtDecode from "jwt-decode";

/** Main JoblyApp Component
 *  Houses routes list
 *
 *  Props:
 *  - none
 *
 *  States:
 *  - currUser :
 *    {user: {username, password, firstName, lastName, email, isAdmin, [jobs]}}
 *
 *  - token : null or string
 *
 *  JoblyApp -> Routes
 */

function JoblyApp() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);
  console.log("currUser=", currUser, "token=", token);


  /** Checks to see if there is a token in local storage on first render
   *  if there is, sets API token and state to existing token.
   *
   */
  useEffect(function checkLocalStorageAndSetToken() {
    console.log("checks local storage");
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
      JoblyApi.token = localStorageToken;
    }
  }, []);

  /** Calls JoblyApi to get user when token changes. */
  useEffect(
    function fetchUserDataWhenTokenChanges() {
      async function fetchUser() {
        if (token) {
          try {
            const { username } = jwtDecode(token);
            const userFromAPI = await JoblyApi.getUser(username);
            setCurrUser(userFromAPI);
            localStorage.setItem("token", token);
          } catch (err) {
            setCurrUser(null);
            setToken(null);
          }
        } else {
          setCurrUser(null);
        }
      }

      fetchUser();
    },
    [token]
  );

  /** Login function makes API call
   *
   *  Takes:
   *  - form data from LoginForm
   *
   *  Sets
   *  - token
   *
   */
  async function login(userData) {
    const token = await JoblyApi.logIn(userData);
    setToken(token);
  }

  /** Signup function makes API call
   *
   *  Takes:
   *  - form data from SignUpForm
   *
   *  Sets
   *  - token
   *
   */
  async function signup(userData) {
    const token = await JoblyApi.signUp(userData);
    setToken(token);
  }

  /** Logout function
   *
   *  Clears local storage
   *
   *  Sets
   *  - token to null
   *
   */
  function logout() {
    const token = JoblyApi.logOut();
    setToken(token);
    localStorage.clear();
  }

  /**update function
   *
   * updates user info
   *
   * takes userData: {username, firstName, lastName, email}
   *
   * sets:
   *  -currUser
   */
  async function update(userData) {
    const userFromApi = await JoblyApi.updateUser(userData);
    setCurrUser(userFromApi);
  }

  if (currUser === null && localStorage.getItem("token")) return <h1>Loading...</h1>;

  return (
    <div className="JoblyApp">
      <userContext.Provider value={{ currUser, token }}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} signup={signup} update={update} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default JoblyApp;
