import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import ReviewThis from './Review';
import Profile from './Profile';

const App = () => {

  const slides = [
    { url: "http://localhost:3000/banner1.jpeg", title: "Banner1" },
    { url: "http://localhost:3000/banner2.jpeg", title: "Banner2" },
    { url: "http://localhost:3000/banner3.jpeg", title: "Banner3" },
    { url: "http://localhost:3000/banner4.jpeg", title: "Banner4" },
  ];

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home status='logout' />} />
          <Route path="/home" element={<Home status='login' />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reviewthis" element={<ReviewThis />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;