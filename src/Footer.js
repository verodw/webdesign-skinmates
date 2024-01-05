import React from 'react';
import './App.css';

const Footer = ({status}) => {
    
    var linkHome = '/';
    var linkProduct = '/product';
    var linkProfile = '';

    if(status==='login'){
        console.log('footer login')
        linkHome = '/home';
        linkProduct = '/product-login=true';
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
            <p>Copyright ©2023 Skinmates. All rights reserved.</p>
        </footer>
    );
};

export default Footer;