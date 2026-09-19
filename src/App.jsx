import { useState, useEffect } from 'react'
import { InputBot } from './componenets/InputBot'
import ChatMessages from './componenets/ChatMessages';
// import './App.css'
import { chatbot } from 'supersimpledev';
import clsx from 'clsx';

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
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
    <div className={clsx({ "bg-gray-800 **:text-white": theme === "dark", "bg-white text-black": theme === "light" })} >
      <div className="mx-auto max-w-200 h-screen flex flex-col overflow-hidden text-sm md:text-[16px] ">
        <div className="flex flex-col md:flex-row  mt-5 gap-3 md:gap-8 items-center">
          <span onClick={toggleTheme} className='animate-spin text-[30px] md:text-[40px] cursor-pointer '>
            {theme === "light" ? "☀️" : "🌙"}
          </span>
          {chatMessages.length === 0 && <p className="text-background text-center">
            WELCOME TO MY CHATBOT YOU CAN SEND MESSAGE BY USING THE TEXTBOX BELOW. </p>}

        </div>


        <ChatMessages
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
        <InputBot
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </div>
  );
}

export default App
