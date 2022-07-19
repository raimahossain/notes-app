import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)}
        className="save"
      >
        Dark mode
      </button>
    </div>
  );
};

export default Header;
