import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hello } from './Hello'
import { LanguageContext } from './LanguageContext'

function App() {
  const [language, setLanguage] = useState('en')
  
  return (
    <>
      <div>
        <LanguageContext.Provider value= {language}>
          <div>
            <label>Select language:</label>
            <select id='language' value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="it">Italian</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
        <Hello/>
          </div>
       </LanguageContext.Provider>
      </div>
    </>
  )
}

export default App
