import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList"
import Navigation from "./Navigation";
import userContext from "./userContext";


/** Main JoblyApp Component
 *
 *  Props:
 *  - none
 *
 *  State:
 *  - user : {username, loggedIn, password}
 *
 *  Houses routes list
 *
 *  JoblyApp -> Routes
 */

function JoblyApp() {

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
