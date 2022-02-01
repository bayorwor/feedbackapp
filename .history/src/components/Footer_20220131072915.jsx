import { NavLink } from "react-router-dom";
import Card from "./shared/Card";

function Footer() {
  return (
    <Card reverse={true}>
      <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>
      <p>{Date.now().getFullYear}</p>
    </Card>
  );
}

export default Footer;
