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


const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = (status) => {
    console.log(">>>>" + status);
    setIsLoggedIn(status);
  };
  return ( 
    <  >
        {
          isLoggedIn ? (
          <>
            
            <Routes Routes >
                <Route path="/" element={<Home offLogin={handleLogin}></Home>} />
                <Route path="/message" element={<Message/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" />} /> {/* Điều hướng về Home nếu không tìm thấy route */}
            </Routes>
            </>
         
          )
            :
          (
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} ></Login>} />
              <Route path="/signup" element={<Signup></Signup>} />
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="*" element={<Navigate to="/login" />}/>
            </Routes>
          )
        }
     </>
  )
}
export default App;
