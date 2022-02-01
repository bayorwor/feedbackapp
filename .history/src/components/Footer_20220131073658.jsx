import { NavLink } from "react-router-dom";
import Card from "./shared/Card";

function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <Card reverse={true}>
      <div className="footer">
        <div className="footer">
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </div>
        <p>{year}</p>
      </div>
    </Card>
  );
}

export default Footer;
