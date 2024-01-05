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
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className='input-components'>
            <label>Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <label className='checkbox'>
            <input type="checkbox" className='input-check' onChange={() => setShowPassword(!showPassword)} /> Show Password
          </label>

          <button className="pink-button" onClick={handleLogin}>Login</button>
        </form>

        <div className="divider-vertical">
            <hr></hr>or<hr></hr>
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