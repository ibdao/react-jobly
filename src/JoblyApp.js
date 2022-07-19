import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList"

/** Main JoblyApp Component
 * 
 *  Props: 
 *  - none
 * 
 *  State:
 *  - none
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
