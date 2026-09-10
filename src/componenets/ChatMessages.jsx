import { useRef, useEffect } from "react"
import { ChatBotApp } from "./ChatBotApp"
import './ChatMessages.css'
function ChatMessages({ chatMessages }) {

    const chatRef = useRef(null)

    useEffect(() => {
        const chatMessageElem = chatRef.current
        if (chatMessageElem) {
            chatMessageElem.scrollTop = chatMessageElem.scrollHeight
        }

    }, [chatMessages])

    return (
        <div className="chat-message-container" ref={chatRef}>
            {
                chatMessages.map((chat) => {
                    return (
                        <ChatBotApp
                            message={chat.message}
                            sender={chat.sender}
                            time={chat.time}
                            key={chat.id}
                        />
                    );
                })
            }

        </div>
    );
}
export default ChatMessages;