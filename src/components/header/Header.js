import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { offLogin } = props;
  const handleOnChange = (event) => {
    return (
      console.log(">>>>> Value" +  event.target.value)
    )
  }
  const handleLogoff = () => {
    offLogin(false);
  }
  return (
    <header className="nav__header">
      <span className="nav__list">
        <span className="nav__item">
          <NavLink to="/" className="nav__link">
            Home
            <i className="fa-solid fa-house"></i>
          </NavLink>
        </span>

        <input
          onChange={(event) => handleOnChange(event)}
          placeholder="Search" className="nav__item search__navbar" />
        <div className="nav__log">
          <button className="btn btn-profile">info</button>
          <NavLink onClick={handleLogoff} to="/login" className="btn btn-logout">logout</NavLink>
        </div>
      </span>
    </header>
  );
};

export default Header;
