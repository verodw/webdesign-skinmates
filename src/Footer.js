import React from 'react';
import './App.css';

const Footer = ({status}) => {
    
    var linkHome = '/';
    var linkProduct = '/';
    var linkProfile = '/';

    if(status=='login'){
        linkHome = '/home';
        linkProduct = '/product';
        linkProfile = '/profile';
    }

    return (
        <footer>
            <div className='company-name'>
                <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/>
                <h1>Skinmates</h1>
            </div>
            <div className='footer-links'>
                <a href={linkHome}>Home</a><hr></hr>
                <a href={linkProduct}>Products</a><hr></hr>
                <a href={linkProfile}>Profile</a>
            </div>
            {/* <hr></hr> */}
            <p>Copyright ©2023 Skinmates. All rights reserved.</p>
        </footer>
    );
};

export default Footer;