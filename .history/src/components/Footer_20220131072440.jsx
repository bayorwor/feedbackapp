import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default Footer;
