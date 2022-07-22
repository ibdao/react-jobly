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

  /** Checks to see if there is a token in local storage on first render
   *  if there is, sets API token to existing token. 
   */

  useEffect(() => {
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
          const { username } = jwtDecode(token);
          const userFromAPI = await JoblyApi.getUser(username);
          setCurrUser(userFromAPI);
          localStorage.setItem("token", token);
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
    const token = await JoblyApi.login(userData);
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
    const token = JoblyApi.logout();
    setToken(token);
    localStorage.clear();
  }

  return (
    <div className="JoblyApp">
      <userContext.Provider value={{ currUser, token }}>
        <BrowserRouter>
          <Navigation logout={logout} />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default JoblyApp;
