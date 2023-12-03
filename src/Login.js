import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('#', {
        email,
        password,
      });

      // Jika autentikasi berhasil, arahkan ke halaman home
      if (response.data.success) {
        history.push('/home');
      } else {
        // Tampilkan pesan error 
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleGoogleLogin = async () => {
    alert('Continue with Google clicked.');
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <label>Password:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input type="checkbox" onChange={() => setShowPassword(!showPassword)} /> Show Password
      </label>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleLogin}>Continue with Google</button>

      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
