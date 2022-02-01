import React from "react";

const Header = ({ text }) => {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Feedback UI",
};

export default Header;
