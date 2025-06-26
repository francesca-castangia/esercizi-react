import React from 'react';
import { InteractiveWelcome } from './components/InteractiveWelcome';
import Login from './components/Login';

function App() {
  const handleLogin = (state) => {
    console.log("Login state:", state);
  };

  return (
    <div>
      <h2>Interactive Welcome</h2>
      <InteractiveWelcome />

      <h2>Login Form</h2>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;