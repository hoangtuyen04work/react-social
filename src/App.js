import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Signup from './pages/signup/Signup';
import Header from './components/header/Header';
import { ReloadProvider } from './context/ReloadContext';
import './App.scss';

const App = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    <ReloadProvider>
      {isAuthenticated ? (
        <div className="header-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Điều hướng về Home nếu không tìm thấy route */}
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </ReloadProvider>
  );
};

export default App;
