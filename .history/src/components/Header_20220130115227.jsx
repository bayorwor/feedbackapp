import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Feedback UI",
};

Header.PropTypes = {
  title: PropTypes.string,
};

export default Header;
