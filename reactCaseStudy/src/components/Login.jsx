import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
      await axios.post('http://localhost:8080/api/login', { email, password }).then(function (response) {
        // const { token } = response.data;
        // localStorage.setItem('token', token);
        onLogin();
      })
      .catch(function (error) {
        const errorMessage = error.response.data.message
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="centered-content">
      <div className="col-md-12">
        <form>
          <div className="test">
          <h1 className="mt-5 mb-4">Login</h1>
          <div className="mb-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control w-100" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-12">
            <label htmlFor="password" className="form-label">Şifre</label>
            <input type="password" className="form-control w-100" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className="btn btn-primary mt-4" onClick={handleLogin}>Giriş Yap</button>
          </div>
        </form>
      </div>
      <ToastContainer />
  </div>
  );
};

export default Login;
