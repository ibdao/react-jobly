import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** navigation bar for the jobly appp
 * renders on every page
 *
 * Navigation -> {homepage, Companies, Jobs}
 */
function Navigation() {
  return (
    <nav>
      <NavLink key="homepage" to="/">Jobly</NavLink>
      <NavLink key="companies" to="/companies">Companies</NavLink>
      <NavLink key="jobs" to="/jobs">Jobs</NavLink>
      <NavLink key="login" to="/login">Login</NavLink>
      <NavLink key="signup" to="/signup">Sign Up</NavLink>
      <NavLink key="profile" to="/profile">Profile</NavLink>
      <NavLink key="logout" to="/logout">Log Out</NavLink>

    </nav>
  );
}

export default Navigation;