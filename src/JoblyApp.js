import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";
import userContext from "./userContext";
import JoblyApi from "./api";


/** Main JoblyApp Component
 *
 *  Props:
 *  - none
 *
 *  State:
 *  - user : {username, loggedIn}
 *
 *  Houses routes list
 *
 *  JoblyApp -> Routes
 */

function JoblyApp() {
  const [user, setUser] = useState({ token: null, username: "", isLoggedIn: false });
  const navigate = useNavigate()
  async function login(userData) {
    try {
      const token = await JoblyApi.login(userData);
      setUser(user => { user.token: token, user.username: userData.username, user.isLoggedIn: true; });
      navigate("/companies")
    } catch (err) {

    }

  }

  function signup(userData) {

  }

  function logout() {

  }

  return (
    <div className="JoblyApp">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default JoblyApp;
