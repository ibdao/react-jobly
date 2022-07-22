import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";
import userContext from "./userContext";
import JoblyApi from "./api";
import { useJwt } from "react-jwt";


/** Main JoblyApp Component
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
 *
 *  Houses routes list
 *
 *  JoblyApp -> Routes
 */

function JoblyApp() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);
  const { decodedToken } = useJwt(token)
  console.log("decodedToken", decodedToken)



  /** Calls JoblyApi to get user when token changes. */
  useEffect(function fetchUserDataWhenTokenChanges() {
    async function fetchUser() {
      if (decodedToken) {
          const userFromAPI = await JoblyApi.getUser(decodedToken.username);
          setCurrUser(userFromAPI);
      } else {
        setCurrUser(null);
      }
    };

    fetchUser();

  }, [decodedToken]
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
   *  Sets
   *  - token to null
   */
  function logout() {
    const token = JoblyApi.logout();
    setToken(token);
    console.log(token);

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
