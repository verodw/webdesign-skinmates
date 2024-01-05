import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Navbar = ({ status, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchChange = (e) => {
  //   const value = e.target.value;
  //   setSearchTerm(value);

  //   // Mengirim nilai pencarian ke parent component (ProductCategory)
  //   onSearchChange(value);
  // };

  if (status === 'logout') {
    return (
      <header>
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo' />
        </Link>

        <input
          type="text"
          placeholder="Find Products..."
          className='search-bar'
          // value={searchTerm}
          // onChange={handleSearchChange}
        />

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

        <input
          type="text"
          placeholder="Find Products..."
          className='search-bar'
          // value={searchTerm}
          // onChange={handleSearchChange}
        />

        <div className='button-and-notif'>
          <button className='pink-button'><a href='/profile'>Profile</a></button>
        </div>
      </header>
    );
  }
};

export default Navbar;

