import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/** Renders the HomePage
 *
 * {joblyApp, Navigation} -> Homepage
 */
function HomePage() {
  return (
    <div>
      <h1>Jobly HomePage</h1>
      <NavLink key="login" to="/login">
        <button className="btn-primary btn btn-sm fw-bold">
          Login
        </button>
      </NavLink>
      <NavLink key="signup" to="/signup">
        <button className="btn-primary btn btn-sm fw-bold">
          Sign Up
        </button>
      </NavLink>
    </div>
  );
}

export default HomePage;
