import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Colors } from './Colors';

function App() {
   const colorsArray = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ];

  return (
    <>
      <div>
        <h1>Colors List</h1>
        <Colors colors={colorsArray} />
      </div>
    </>
  )
}

export default App
