import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
    <Routes>
      <Route path="/" element={loggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
      <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/" />} />
    </Routes>
  </Router>
  );
};

export default App;
