import { useState } from 'react'

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Ciao! Come stai?", sender: "received" },
    { id: 2, text: "Tutto bene, grazie! E tu?", sender: "sent" },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: "sent",
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages-list">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-bubble ${msg.sender === 'sent' ? 'sent' : 'received'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Scrivi un messaggio..."
        />
        <button onClick={handleSend}>Invia</button>
      </div>
    </div>
  );
}

export default Chat;