import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Navbar = ({ status }) => {
    if (status === 'logout') {
      return (
        <header>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo' />
          </Link>
  
          <input type="text" placeholder="Find Products..." className='search-bar' />
  
          <div className='button-and-notif'>
            <button className='pink-button'><a href='/login'>Login / Signup</a></button>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo' />
          </Link>
  
          <input type="text" placeholder="Find Products..." className='search-bar' />
  
          <div className='button-and-notif'>
            <button className='pink-button'><a href='/profile'>Profile</a></button>
          </div>
        </header>
      );
    }
  };
  
  export default Navbar;