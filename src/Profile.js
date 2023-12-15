import React from "react";
import "./Profile.css";
import Navbar from './Navbar';
import Footer from './Footer';
import "./App.css";

const Profile = () => {
  return (
    <div className="profile">
      {/* Header Section */}
      <Navbar status="login" />

      <div className="div">
        <div className="flex-container">
          <div className="overlap-group">
            <img className="avatar" alt="Avatar" src="avatar.png" />
        
          </div>
          <div className="text-container">
            <div className="text-wrapper">Christine Putri</div>
            <p className="christine-putri">
              <span className="span">christine.putri</span>
              <a
                href="mailto:christine.putri@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="span">@gmail.com</span>
              </a>
            </p>
            <div className="text-wrapper-11">Reviews: 0</div>
           
          </div>
          
        </div>

        <div className="text-container1">
       
          <div className="text-wrapper-1">Account</div>
          <hr className="line" />
          <div className="text-wrapper-2">Edit Profile</div>
          <hr className="line" />
          <div className="text-wrapper-2">Notification Settings</div>
          <hr className="line" />
          <div className="text-wrapper-2">Connected Accounts</div>
          <hr className="line" />
          <div className="text-wrapper-2">App Permissions</div>
          <hr className="line" />
          
          
          <div className="separator"></div>

          <div className="text-wrapper-1">App</div>
          <hr className="line" />
          <div className="text-wrapper-2">About the app</div>
          <hr className="line" />
          <div className="text-wrapper-2">Share with friends</div>
          <hr className="line" />
          <div className="text-wrapper-2">Clear cache</div>
        </div>
        
        <a href='/' className='logout'>Logout</a>

      </div>

      {/* Footer Section */}
      <Footer status='login'/>
    </div>
  );
};

export default Profile;
