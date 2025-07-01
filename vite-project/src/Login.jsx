import { useState } from "react";

export function Login() {
  const [password, setPassword] = useState('');

  const buttonStyle = {
    backgroundColor: password.length < 8 ? 'red' : 'green',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Inserisci password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}