import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import { Clock } from './Clock'

function App() {
  

  return (
    <div>
      <h2>React Counter and Clock</h2>
      <Counter />
      <Clock />
    </div>
  )
}

export default App
