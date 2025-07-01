import { useState } from 'react'
import './App.css'
import { Welcome } from './Welcome';
import { CounterDisplay } from './CounterDisplay';
import { Login } from './Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Welcome/>
      <CounterDisplay count={count}/>
      <button onClick={() => setCount(count + 1)}>Aumenta</button>
      <Login/>
    </>
  )
}

export default App
