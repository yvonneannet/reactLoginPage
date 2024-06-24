import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import SingleUser from './Users/SingleUser';
function App() {
  const handleLogin = () => {
    // This can be used to set global state or any other login logic
    console.log('User logged in');
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<SingleUser />} />
        <Route path="*" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}
export default App;