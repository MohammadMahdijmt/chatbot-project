import { useState, useEffect } from 'react'
import { InputBot } from './componenets/InputBot'
import ChatMessages from './componenets/ChatMessages';
import './App.css'
import { chatbot } from 'supersimpledev';

function App() {
  useEffect(() => {
    chatbot.addResponses({
      "goodbye": "goodbye babe",
      "sama": 'oh you mean mohamamd mahdi love',
      "heart": 'sama is my heartbeat',
      "سما ": "قلب محمد مهدی سماست",
      "سمایی ": "قلب محمد مهدی سماست",
      "عشق من کیه ": "عشق محمد مهدی سماست",
      "love": "love is sama",
      "سلام": "سلام چجوری میتونم کمکت کنم",
      "خوبی": "  قربانت گردم",
      "علی دایی ": "دستم به جایی بند نیست اقای کفاشیان",
      "ممد داداش ": " نوکریم ممد دادش"
    })
  }, [])
  const [chatMessages, setChatMessages] = useState([]
    // [{
    //     message: "hello chatbot",
    //     sender: "user",
    //     id: "id1"
    // }, {
    //     message: "hello there!",
    //     sender: "bot",
    //     id: "id2"
    // }, {
    //     message: "how are you?",
    //     sender: "user",
    //     id: "id3"
    // }, {
    //     message: "im fine and you?",
    //     sender: "bot",
    //     id: "id4"
    // }]

  );
  return (
    <div className="full-container">
      {chatMessages.length === 0 && <p className="welcome-message">
        WELCOME TO MY CHATBOT YOU CAN SEND MESSAGE BY USING THE TEXTBOX BELOW..</p>}

      <ChatMessages
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <InputBot
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
