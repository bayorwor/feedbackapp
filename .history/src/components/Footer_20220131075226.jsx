import { NavLink } from "react-router-dom";

function Footer() {
  var today = new Date();
  var year = today.getFullYear();

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </div>
        <p>Copyright &copy; {year}</p>
      </div>
    </>
  );
}

export default Footer;
