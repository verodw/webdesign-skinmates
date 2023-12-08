import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './RegisLogin.css';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('#', {
        name,
        email,
        password,
      });

      // Jika registrasi berhasil, arahkan ke halaman home
      if (response.data.success) {
        navigate.push('/home');
      } else {
        // Tampilkan pesan error
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='register'>

      <div className='navbar-regis'><img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/></div>

      <h2>Create Your Account</h2>

      <div className='regis-section'>
        <form>
          <div className='input-components'>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='input-components'>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='input-components'>
            <label>Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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

        <div className='login-section'>
          <button className="light-button"><img src='/logo-google.png' className='icon'></img><a href='/'>Continue with Google</a></button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
          <img src='/login-pic.png'></img>
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