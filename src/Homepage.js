import React from "react";
import { NavLink } from "react-router-dom";
import {useContext} from "react";
import userContext from "./userContext";
import "./Homepage.css"

/** Renders the HomePage
 *
 * {joblyApp, Navigation} -> Homepage
 */
function HomePage() {
  const {currUser} = useContext(userContext)

  return (
    <div className="Homepage">
      <h1 className="mb-4 fw-bold">Jobly</h1>
      <p className="lead">Let's find a job!!</p>
      {currUser !== null
      ? <h3>{`Welcome back ${currUser.firstName}`}</h3>
      : (<div>
      <NavLink key="login" to="/login">
        <button className="btn-primary btn btn-sm fw-bold me-3">
          Login
        </button>
      </NavLink>
      <NavLink key="signup" to="/signup">
        <button className="btn-primary btn btn-sm fw-bold">
          Sign Up
        </button>
      </NavLink>
      </div>)
      }
    </div>
  );
}

export default HomePage;
