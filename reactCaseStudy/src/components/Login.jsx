import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', { email, password });
      console.log(response);
      // const { token } = response.data;
      // localStorage.setItem('token', token);
      onLogin();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="centered-content">
      <div className="col-md-12">
        <h1 className="mt-5 mb-4">Login</h1>
        <form>
          <div className="mb-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-12">
            <label htmlFor="password" className="form-label">Şifre</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary mt-4" onClick={handleLogin}>Giriş Yap</button>
        </form>
      </div>
  </div>
  );
};

export default Login;
