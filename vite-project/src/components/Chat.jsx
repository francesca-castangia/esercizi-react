import { useState } from 'react'
import useSWR from 'swr'
import '../index.css'

function Chat() {
 const [messages, setMessages] = useState([])
  const [userInput, setUserInput] = useState('')
  const [url, setUrl] = useState(null)

  const { data, error } = useSWR(url)

  // Quando arriva la risposta, aggiungila ai messaggi
  if (data) {
    setMessages(prev => [...prev, { sender: 'bot', text: data.response }])
    setUrl(null) // resetto l'URL per evitare fetch infinite
  }

  const handleSend = () => {
    if (!userInput) return
    setMessages(prev => [...prev, { sender: 'user', text: userInput }])
    setUrl('https://mocki.io/v1/4baf197b-1874-4f19-b28d-b5a56180df2e') 
    setUserInput('')
  }

  return (
    <div className='chat-container'>
      <div className="messages">
        {messages.map((m, idx) => (
          <div key={idx}  className={`message ${m.sender}`}><b>{m.sender}:</b> {m.text}</div>
        ))}
      </div>
      <div className="input-container">
        <input value={userInput} onChange={e => setUserInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()}/>
      <button onClick={handleSend} >Send</button>
      </div>
    </div>
  )

}

export default Chat;