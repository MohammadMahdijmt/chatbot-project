import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from 'dayjs'
// import './InputBot.css'
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
        <form onSubmit={handleSubmit} className="flex m-[10px] gap-[5px] relative">

            <input
                type="text"
                placeholder=""
                size="50"
                onChange={setInput}
                value={inputText}
                className="w-[100px] md:py-[14px] py-[10px] px-[40px] grow border-2 border-gray-300 rounded-[5px] peer font-nazanin "
                ref={inputRef}
            // onKeyDown={keyDownEven}
            />
            <label htmlFor="" className="animate-bounce top-1/2 left-[10px] -translate-y-1/2
             `-translate-x-[10px]` absolute peer-focus:-top-1/6 transition-all " >Enter Your Message</label>
            <button
                className="py-[10px] md:py-[14px] px-[40px] border-none rounded-[5px] bg-gray-500 text-white cursor-pointer hover:bg-gray-500/50 transition active:scale-95 "
            // onClick={sendButton}
            >send</button>
        </form>
    );
}
