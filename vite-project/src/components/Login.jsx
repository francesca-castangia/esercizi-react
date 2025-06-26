import React, { useState } from 'react';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    onLogin(formData);
  };

  const handleReset = () => {
    setFormData({ username: '', password: '', remember: false });
  };

  const isDisabled = formData.username === '' || formData.password === '';

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div>
        <label>
          <input
            name="remember"
            type="checkbox"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember me
        </label>
      </div>
      <button type="submit" disabled={isDisabled}>Login</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Login;