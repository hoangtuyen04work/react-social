import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { doLogout } from "../../redux/action/userAction";
import { useDispatch } from "react-redux";
import Avatar from "../avatar/Avata";
import {
  useNavigate
} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    return (
      console.log(">>>>> Value" +  event.target.value)
    )
  }
  const handleLogoff = () => {
    dispatch(doLogout());
    navigate('/login')
  }
  const handleProfileClick = () => {
    navigate('/profile')
  }
  return (
    <header className="nav__header">
      <span className="nav__list">
        <span className="nav__item">
          <span className="title__web">
            Social Media
          </span>
          <NavLink to="/" className="nav__link">
            <FaHome />
            <span className="home-header"> Home</span>
          </NavLink>
        </span>

        <div className="search__bar">
          <input
            onChange={(event) => handleOnChange(event)}
            placeholder="Search or enter people or post" className="nav__item search__input" />
          <div className="search__icon">
            <IoSearchOutline/>
            </div>
        </div>
        <div className="nav__log">
          <div className="profile-header" onClick={handleProfileClick}>
            <Avatar/>
          </div>
          <NavLink onClick={handleLogoff} to="/login" className="btn btn-logout">logout</NavLink>
        </div>
      </span>
    </header>
  );
};

export default Header;
