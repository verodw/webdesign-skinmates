import React from 'react';
import './App.css';

const Navbar = ({status}) => {
    if(status=='logout'){
        return(
            <header>
                <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/>

                <input type="text" placeholder="Find Products..." className='search-bar'/>

                <div className='button-and-notif'>
                    <button className='pink-button'><a href='/login'>Login / Signup</a></button>
                    {/* <button className='icon-button'>
                        <img src={process.env.PUBLIC_URL + '/notification.png'} alt="Notification Icon" className='icon'/>
                    </button> */}
                </div> 
            </header>
        );
    }
    else {
        return(
            <header>
                <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/>

                <input type="text" placeholder="Find Products..." className='search-bar'/>

                <div className='button-and-notif'>
                    <button className='pink-button'><a href='/profile'>Profile</a></button>
                </div> 
            </header>
        );
    }
};

export default Navbar;