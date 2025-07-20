import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Chat/>}/>
        </Routes>
      </div>
    
    </>
  )
}

export default App
