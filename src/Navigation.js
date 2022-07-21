import { NavLink } from "react-router-dom";
import "./Navigation.css";
import {useContext} from "react";
import userContext from "./userContext";

/** navigation bar for the jobly appp
 * renders on every page
 *
 * Navigation -> {homepage, Companies, Jobs}
 */
function Navigation({logout}) {
  const { currUser } = useContext(userContext);
  return (
    <nav>
      <NavLink key="homepage" to="/">Jobly</NavLink>
      { currUser !== null
      ?
        (<div>
          <NavLink key="companies" to="/companies">Companies</NavLink>
          <NavLink key="jobs" to="/jobs">Jobs</NavLink>
          <NavLink key="profile" to="/profile">Profile</NavLink>
          <NavLink key="logout" onClick={logout} to="/">Log Out</NavLink>
        </div>)
        : (<div>
          <NavLink key="login" to="/login">Login</NavLink>
          <NavLink key="signup" to="/signup">Sign Up</NavLink>
        </div>)
      }
    </nav>
  );
}

export default Navigation;