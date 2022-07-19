import React from "react";

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
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default JoblyApp;
