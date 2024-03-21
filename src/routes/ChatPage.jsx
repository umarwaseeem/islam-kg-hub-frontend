import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function UserMessage({ text }) {
    const currentTime = new Date().toLocaleTimeString();
    return (
        <>
            <div className="bg-white ml-auto p-4 rounded-xl w-3/4 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-none text-right break-words">{text}</div>
            <p className="text-black text-xs ml-auto mr-4">{currentTime}</p>
        </>
    );
}

function SystemMessage({ text }) {
    const currentTime = new Date().toLocaleTimeString();
    return (
        <>
            <div className="bg-customYellow p-4 rounded-xl w-3/4 rounded-tl-xl rounded-tr-xl rounded-bl-none rounded-br-xl break-words">{text}</div>
            <p className="text-black ml-2 text-xs">{currentTime}</p>
        </>
    );
}

function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const placeholderTextMessage = "Ask your question here";

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessages = [...messages, { text: message, type: 'user' }];
            setMessages(newMessages);
            setMessage('');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="relative rounded-lg h-[80vh] bg-customGray m-8 p-4 flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 flex justify-evenly mt-4">
                    <button className="bg-customBrown text-white px-4 py-2 rounded-md mr-2">About</button>
                    <button className="bg-customBrown text-white px-4 py-2 rounded-md mr-2">Question List</button>
                    <button className="bg-customBrown text-white px-4 py-2 rounded-md">Disclamer</button>
                </div>
                <div className="overflow-y-auto mt-16">
                    {/* Chat messages will be displayed here */}
                    <SystemMessage text={"Welcome to IslamKGHub. Ask a question related to hadith."} />;
                    <div className="flex flex-col gap-1">
                        {messages.map((msg, index) => {
                            return msg.type === 'user' ? <UserMessage key={index} text={msg.text} /> : <SystemMessage key={index} text={msg.text} />;
                        })}
                    </div>
                </div>

                <div className="flex items-center mt-4">
                    <input type="text" className="flex-1 border border-gray-300 rounded-md p-3 mr-2" placeholder={placeholderTextMessage} value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className="bg-customGreen text-white p-3 rounded-md hover:bg-green-900" onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
