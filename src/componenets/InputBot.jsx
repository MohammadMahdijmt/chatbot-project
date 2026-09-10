import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from 'dayjs'
import './InputBot.css'
export function InputBot({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState("")
    function setInput(e) {
        setInputText(e.target.value)
    }
    async function sendButton() {
        if (inputText.trim() === "") {
            alert("please enter something");
            return;
        }
        const inputMessage = {
            message: inputText,
            sender: "user",
            time: dayjs().format('h:mma'),
            id: crypto.randomUUID()
        }
        setInputText("")
        const loadingMessage = {
            message: "loading...",
            sender: "bot",
            id: crypto.randomUUID()
        }

        setChatMessages([...chatMessages,
            inputMessage, loadingMessage])

        const ResChatBot = await Chatbot.getResponseAsync(inputText)
        setChatMessages([
            ...chatMessages,
            inputMessage, {
                message: ResChatBot,
                sender: "bot",
                time: dayjs().format('h:mma'),
                id: crypto.randomUUID()
            }

        ])

    }
    function handleSubmit(e) {
        e.preventDefault();
        sendButton();

    }
    // function keyDownEven(e) {
    //     if (e.key === "Enter") {
    //         sendButton();
    //     }
    // }
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <form onSubmit={handleSubmit} className="form-message">
            <input
                type="text"
                placeholder="enter your message......"
                size="50"
                onChange={setInput}
                value={inputText}
                className="input-message"
                ref={inputRef}
            // onKeyDown={keyDownEven}
            />
            <button
                className="button-message "
            // onClick={sendButton}
            >send</button>
        </form>
    );
}
