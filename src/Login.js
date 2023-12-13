import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './RegisLogin.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate('/home');
    // try {
    //   const response = await axios.post('#', {
    //     email,
    //     password,
    //   });

    //   // Jika autentikasi berhasil, arahkan ke halaman home
    //   if (response.data.success) {
    //     navigate.push('/home');
    //   } else {
    //     // Tampilkan pesan error 
    //     alert('Login failed. Please check your credentials.');
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error);
    //   alert('An error occurred. Please try again later.');
    // }
  };

  const handleGoogleLogin = async () => {
    navigate('/home');
  };

  return (
    <div className='login'>

      <div className='navbar-login'><img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/></div>

      <h2>Welcome Back</h2>

      <div className='login-section'>
        <form>

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

          <button className="pink-button" onClick={handleLogin}>Login</button>
        </form>

        <div className="divider-vertical">
            {/* <img className="line" alt="Line" src="line-1.svg" /> */}
            <hr></hr>or<hr></hr>
            {/* <img className="line" alt="Line" src="line-2.svg" /> */}
        </div>

        <div className='regis-part'>
          <button className="light-button"><img src='/logo-google.png' className='icon' onClick={handleGoogleLogin}></img><a href='/'>Continue with Google</a></button>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
          <img src='/login-pic.png' className='cover'></img>
        </div>
      </div>

    </div>
  );
};

export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './App.css';
// import React from "react";
// import { EyeOff } from "./EyeOff";
// import "./Login.css";

// export const Login = () => {
//   return (
//     <div className="login">
//       <div className="div">
//         <div className="text-wrapper">Welcome Back</div>
//         <div className="frame">
//           <img className="line" alt="Line" src="line-1.svg" />
//           <div className="text-wrapper-2">or</div>
//           <img className="line" alt="Line" src="line-2.svg" />
//         </div>
//         <div className="group">
//           <div className="overlap-group">
//             <div className="text-wrapper-3">Login</div>
//           </div>
//         </div>
//         <div className="frame-2">
//           <button className="button">
//             <div className="frame-3">
//               <img className="icon" alt="Icon" src="icon.svg" />
//               <div className="label">Continue with Google</div>
//             </div>
//           </button>
//           <p className="don-t-have-an">
//             <span className="span">Don’t have an account? </span>
//             <span className="text-wrapper-4">Register</span>
//           </p>
//         </div>
//         <img src={process.env.PUBLIC_URL + '/logo-skinmates.png'} alt="Skinmates Logo" className='img-logo'/>
//         <img className="young-boys-and-young" alt="Young boys and young" src="stik1.png" />
//         <div className="text-wrapper-5">Forgot Password?</div>
//         <div className="overlap">
//           <div className="rectangle" />
//           <div className="text-wrapper-6">Password</div>
//           {/* <EyeOff className="eye-off" /> */}
//         </div>
//         <div className="rectangle-2" />
//         <div className="text-wrapper-7">Email</div>
//       </div>
//     </div>
//   );
// };

// export default Login;