import React from "react";
import "./Profile.css";
import Footer from './Footer';

const Profile = () => {
  return (
    <div className="profile">
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
        <div className="text-wrapper-2">Account</div>
        <hr className="line" />
        <div className="text-wrapper-3">Edit Profile</div>
        <hr className="line" />
        <div className="text-wrapper-4">Notification Settings</div>
        <hr className="line-2" />
        <div className="text-wrapper-5">Connected Accounts</div>
        <hr className="line-3" />
        <div className="text-wrapper-6">App Permissions</div>
        <hr className="line-2" />
        <div className="text-wrapper-7">About the app</div>
        <hr className="line-4" />
        <div className="text-wrapper-8">Share with friends</div>
        <hr className="line-5" />
        <div className="text-wrapper-9">Clear cache</div>
        <hr className="line-2" />
        <div className="text-wrapper-10">App</div>
      </div>

      {/* Footer Section */ }
      <Footer/>
      
    </div>
  );
};

export default Profile;


