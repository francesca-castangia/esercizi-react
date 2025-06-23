import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Counter } from './Counter';
import { CounterDisplay } from './CounterDisplay';

function App() {
  const handleAlertTime = () => {
    alert(`Current time is ${new Date().toLocaleTimeString()}`);
  }

  return (
    <>
     <Counter initialValue={0} incrementAmount={1} />
    </>
  )
}

export default App
