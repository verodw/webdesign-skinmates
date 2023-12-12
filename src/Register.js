import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './RegisLogin.css';
// import './Register.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const nameRef = useRef();



  const handleNameChange = (value) => {
    setUsername(value);
    validateName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const validateName = (value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: USER_REGEX.test(value)
        ? ''
        : (
          <div style={{ color: 'red' }}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </div>
        )
    }));
  };
  
  const validateEmail = (value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: EMAIL_REGEX.test(value)
        ? ''
        : (
          <div className="error-message" style={{ color: 'red' }}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Invalid email address.<br />
            Must follow the format example@gmail.com
          </div>
        ),
    }));
  };


  const validatePassword = (value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: PWD_REGEX.test(value)
        ? ''
        : (
          <div className="error-message" style={{ color: 'red' }} >
            <FontAwesomeIcon icon={faTimes} />
            Invalid password.<br />
            Must be 8 to 24 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.<br />
            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </div>
        ),
    }));
  };

  
  const validateConfirmPassword = (value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: value === password
        ? ''
        : (
          <div className="error-message" style={{ color: 'red' }}>
            <FontAwesomeIcon icon={faTimes} />
            Must match the first password input field.
          </div>
        ),
    }));
  };


  const isFormValid = () => {
    return Object.values(errors).every((error) => error === '');
  };

  const handleRegister = () => {
    if (isFormValid()) {
      // Your registration logic here
      // navigate('/home');
      setSuccess(true);
    } else {
      alert('Please fix the errors in the form before submitting.');
    }
  };


  return (
    <div className='register'>
      <div className='navbar-regis'><img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/></div>

      <h2>Create Your Account</h2>

      <div className='regis-section'>
        <form>
         
          <div className='input-components'>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => handleNameChange(e.target.value)} />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className='input-components'>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => handleEmailChange(e.target.value)} />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className='input-components'>
            <label>Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className='input-components'>
            <label>Confirm Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            />
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>
          
          <label className='checkbox'>
            <input type="checkbox" className='input-check' onChange={() => setShowPassword(!showPassword)} /> Show Password
          </label>

          <button className="pink-button" onClick={handleRegister}>Create account</button>
        </form>

        <div className="divider-vertical">
            {/* <img className="line" alt="Line" src="line-1.svg" /> */}
            <hr></hr>or<hr></hr>
            {/* <img className="line" alt="Line" src="line-2.svg" /> */}
        </div>

        <div className='login-part'>
          <button className="light-button"><img src='/logo-google.png' className='icon'></img><a href='/'>Continue with Google</a></button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
          <img src='/regis-pic.png' className='cover'></img>
        </div>
      </div>

    </div>
  );
};

export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './App.css';
// import './RegisLogin.css';

// import React from "react";
// import { Check } from "./Check";
// import { EyeOff } from "./EyeOff";
// import { IconComponentNode } from "./IconComponentNode";
// import "./Register.css";

// export const Register = () => {
//   return (
//     <div className="register">
//       <div className="div">
//         <div className="text-wrapper">Create Your Account</div>
//         <div className="frame">
//           <img className="line" alt="Line" src="line-1.svg" />
//           <div className="text-wrapper-2">or</div>
//           <img className="line" alt="Line" src="line-2.svg" />
//         </div>
//         <div className="overlap">
//           <div className="rectangle" />
//           <div className="text-wrapper-3">First Name</div>
//         </div>
//         <div className="overlap-group">
//           <div className="rectangle" />
//           <div className="text-wrapper-3">Password</div>
//           {/* <EyeOff className="eye-off" /> */}
//         </div>
//         <div className="overlap-2">
//           <div className="rectangle-2" />
//           <div className="text-wrapper-4">Confirm Password</div>
//           {/* <IconComponentNode className="eye-off-instance" /> */}
//         </div>
//         <div className="overlap-3">
//           <div className="rectangle-3" />
//           <div className="text-wrapper-3">Email</div>
//         </div>
//         <div className="overlap-4">
//           <div className="rectangle" />
//           <div className="text-wrapper-3">Last Name</div>
//         </div>
//         <div className="group">
//           <div className="div-wrapper">
//             <div className="text-wrapper-5">Create Account</div>
//           </div>
//         </div>
//         <div className="frame-2">
//           <button className="button">
//             <div className="frame-3">
//               <img className="icon" alt="Icon" src="icon.svg" />
//               <div className="label">Continue with Google</div>
//             </div>
//           </button>
//           <p className="already-have-an">
//             <span className="span">Already have an account? </span>
//             <span className="text-wrapper-6">Login</span>
//           </p>
//         </div>
//         <div className="group-2">
//           <div className="control-help">
//             {/* <Check className="check-instance" /> */}
//           </div>
//           <p className="i-agree-to-the-terms">
//             <span className="text-wrapper-7">I agree to the </span>
//             <span className="text-wrapper-8">Terms &amp; Conditions</span>
//             <span className="text-wrapper-7"> and </span>
//             <span className="text-wrapper-8">Privacy Policy</span>
//           </p>
//         </div>
//         <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/>
//       </div>
//     </div>
//   );
// };

// export default Register;