import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FocusableInput } from './FocusableInput'
import { MountLogger } from './MountLogger'

function App() {
  

  return (
    <>
      <StrictMode>
        <div>
          <h1>Focusable Input + Mount Logger</h1>
          <FocusableInput />
          <MountLogger />
        </div>
      </StrictMode>
    </>
  )
}

export default App
