import logo from './logo.svg';
import './App.scss';
import Home from './pages/home/Home'
import React, {
  useState
} from 'react';
import {
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Avatar from './components/avatar/Avata';
import Message from './components/message/Message';
import Signup from './pages/signup/Signup';
import {useSelector} from 'react-redux'
import Header from './components/header/Header';

const App = () => {
  
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const { user } = useSelector(state => state.user.user)
  const handleLogin = (status) => {

  };
  return ( 
    <  >
        {
          isAuthenticated ? (
          <div className="header-container">
            <Header/>
            <Routes Routes >
                <Route path="/" element={<Home></Home>} />
                {/* <Route path="/message" element={<Message/>} /> */}
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* Điều hướng về Home nếu không tìm thấy route */}
            </Routes>
            </div>
         
          )
            :
          (
            <Routes>
              <Route path="/login" element={<Login ></Login>} />
              <Route path="/signup" element={<Signup></Signup>} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )
        }
     </>
  )
}
export default App;
