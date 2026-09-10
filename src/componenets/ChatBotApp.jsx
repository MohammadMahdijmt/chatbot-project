import userImage from '../assets/box1.png'
import botImage from '../assets/box2.png'
import './ChatBotApp.css'
export function ChatBotApp({ message, sender, time }) {
    // const {message , sender} = prop;

    return (
        <div className={sender === "user" ? "user-message" : "bot-message"}>
            {sender === "bot" && <img src={botImage} alt="box2" />}
            <div className="message-u-sent">
                {message}
                <span className='chat-time'>{time}</span>
            </div>
            {sender === "user" && <img src={userImage} alt="box1" />}

        </div>
    );
}