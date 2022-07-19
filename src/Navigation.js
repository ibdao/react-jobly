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
    </nav>
  );
}

export default Navigation;