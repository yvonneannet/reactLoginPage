import React, { useState } from 'react';
import Modal from 'react-modal';
import { login } from './utils';
import './index.css';
import { useNavigate } from 'react-router-dom';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const results = await login(username, password);
      if (results.success) {
        onLogin(); // Optional: Use this for additional login logic if needed
        setIsOpen(false);
        navigate('/users'); // Navigate to users page
      } else {
        setError(results.error);
      }
    } catch (error) {
      setError(`Error during login: ${error.message}`);
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} ariaHideApp={false}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <input
          placeholder="Enter username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default Login;