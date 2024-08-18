import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { doLogout, doOffSearch, doOnSearch, doOnSearchUser } from "../../redux/action/userAction";
import { useDispatch } from "react-redux";
import Avatar from "../avatar/Avata";
import {
  useNavigate
} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useReload } from "../../context/ReloadContext";
const Header = () => {
  const [search_content, setSearch_content] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setPostsKey, setSearchContent } = useReload();
  const [userId, setUserId] = useState(useSelector(state => state.user.user.userId));
  const [userName, setUserName] = useState(useSelector(state => state.user.user.userName));
  
  const handleOnChange = (event) => {
    setSearch_content(event.target.value)
  }
  const handleLogoff = () => {
    dispatch(doLogout());
    navigate('/login')
  }
  const handleProfileClick = () => {
    navigate('/profile')
  }
  const handleHomeClick = () => {
    dispatch(doOffSearch());
    dispatch(doOnSearchUser())
    setPostsKey(prevKey => prevKey  + 1)
  }
  const handleSearchClick = () => {
    dispatch(doOnSearch());
    setSearchContent(search_content)
    setPostsKey(prevKey => prevKey + 1)
  }
  return (
    <header className="nav__header">
      <span className="nav__list">
        <span className="nav__item">
          <span className="title__web">
            Social Media
          </span>
          <NavLink to = "/"className = "nav__link"onClick = {handleHomeClick} >
            <FaHome />
            <span className="home-header"> Home</span>
          </NavLink>
        </span>
        <div className="search__bar">
          <input
            onChange={(event) => handleOnChange(event)}
            placeholder="Search or enter people or post" className="nav__item search__input" />
          <div className="search__icon" onClick = {handleSearchClick}>
            <IoSearchOutline/>
            </div>
        </div>
        <div className="nav__log">
          <div className="user" onClick={handleProfileClick}>
            <div className="userName">
              {userName}
            </div>
            <div className="userId">
              {userId}
            </div>
          </div>
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
