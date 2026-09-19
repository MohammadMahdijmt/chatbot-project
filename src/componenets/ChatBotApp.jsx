import userImage from '../assets/box1.png'
import botImage from '../assets/box2.png'
// import './ChatBotApp.css'
export function ChatBotApp({ message, sender, time }) {
    // const {message , sender} = prop;

    return (
        <div className={sender === "user" ? "flex justify-end items-start" : "flex justify-start items-start"}>
            {sender === "bot" && <img src={botImage} alt="box2" className='ml-2 w-[50px] rounded-full ' />}
            <div className="bg-[#00000039] flex flex-col p-[10px] rounded-[10px] m-[10px] text-black md:max-w-[300px] max-w-[220px] font-nazanin ">
                {message}
                <span className='mt-[7px] text-[#008062] '>{time}</span>
            </div>
            {sender === "user" && <img src={userImage} alt="box1" className='mr-2 w-[50px] rounded-full' />}

        </div>
    );
}