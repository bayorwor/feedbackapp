import { NavLink } from "react-router-dom";
import Card from "./shared/Card";

function Footer() {
  return (
    <Card>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Home</NavLink>
    </Card>
  );
}

export default Footer;
