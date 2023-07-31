import React from "react";
import '../assets/style.scss';
const Header = ({handleMode}) => {
const handleModeValue=()=>{handleMode(prevMode=> !prevMode)};
  return (
    <div className="header">
      <h3>My Note App</h3>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" onClick={handleModeValue}></span>
      </label>
    </div>
  );
};

export default Header;
