import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

function UserMessage({ text }) {
    const currentTime = new Date().toLocaleTimeString();
    return (
        <div className="flex flex-col items-end mb-6 animate-fadeIn">
            <div className="bg-white ml-auto p-4 rounded-2xl w-3/4 rounded-tr-none shadow-md">
                <p className="break-words text-gray-800">{text}</p>
            </div>
            <span className="text-xs text-gray-500 mt-1 mr-2">{currentTime}</span>
        </div>
    );
}

function SystemMessage({ text }) {
    const currentTime = new Date().toLocaleTimeString();
    return (
        <div className="flex flex-col items-start mb-6 animate-fadeIn">
            <div className="bg-customYellow p-4 rounded-2xl w-3/4 rounded-tl-none shadow-md">
                <p className="break-words text-gray-800">{text}</p>
            </div>
            <span className="text-xs text-gray-500 mt-1 ml-2">{currentTime}</span>
        </div>
    );
}

function ChatList({ chats, activeChat, setActiveChat }) {
    return (
        <div className="bg-white h-full overflow-y-auto">
            {chats.map((chat, index) => (
                <div
                    key={index}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-100 ${
                        activeChat === index ? 'bg-gray-200' : ''
                    }`}
                    onClick={() => setActiveChat(index)}
                >
                    <h3 className="font-semibold">{chat.name}</h3>
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
            ))}
        </div>
    );
}

function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [chats, setChats] = useState([
        { name: 'Chat 1', lastMessage: 'Last message from Chat 1' },
        { name: 'Chat 2', lastMessage: 'Last message from Chat 2' },
        { name: 'Chat 3', lastMessage: 'Last message from Chat 3' },
    ]);
    const [activeChat, setActiveChat] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showChatList, setShowChatList] = useState(!isMobile);

    const placeholderTextMessage = "Ask your question here";
    const baseURL = "http://localhost:8000/userQuery";

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setShowChatList(!mobile);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSendMessage = async () => {
        if (message.trim() !== '') {
            const newMessages = [...messages, { text: message, type: 'user' }];
            setMessages(newMessages);
            setMessage('');

            try {
                const response = await fetch(baseURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({ query: message })
                });

                if (response.ok) {
                    const data = await response.json();
                    const systemMessage = data.response;
                    const newMessagesWithResponse = [...newMessages, { text: systemMessage, type: 'system' }];
                    setMessages(newMessagesWithResponse);
                } else {
                    throw new Error('Failed to fetch');
                }
            } catch (error) {
                console.error('Error:', error);
                const errorMessage = "Sorry, there was an error processing your request.";
                const newMessagesWithError = [...newMessages, { text: errorMessage, type: 'system' }];
                setMessages(newMessagesWithError);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar links={[
                { href: "/", label: "Home" },
                { href: "/about", label: "About IslamKGHub" },
                { href: "/chat", label: "Chat" },
                { href: "/analytics", label: "Analytics" },
                { href: "/faqs", label: "FAQs" }
            ]} />

            <div className="flex-1 flex">
                {/* Chat List */}
                <div className={`w-1/4 border-r ${isMobile && !showChatList ? 'hidden' : 'block'}`}>
                    <ChatList chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />
                </div>

                {/* Chat UI */}
                <div className={`flex-1 flex flex-col ${isMobile && showChatList ? 'hidden' : 'block'}`}>
                    <div className="bg-customGray flex-1 p-4 flex flex-col">
                        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                            <SystemMessage text="Welcome to IslamKGHub. Ask a question related to hadith." />
                            {messages.map((msg, index) => (
                                msg.type === 'user' ? <UserMessage key={index} text={msg.text} /> : <SystemMessage key={index} text={msg.text} />
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    className="flex-1 bg-white border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-customGreen transition-all duration-300"
                                    placeholder={placeholderTextMessage}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <button
                                    className="bg-customGreen text-white px-6 py-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-customGreen focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                                    onClick={handleSendMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Toggle Button */}
            {isMobile && (
                <button
                    className="fixed bottom-4 right-4 bg-customGreen text-white p-3 rounded-full shadow-lg"
                    onClick={() => setShowChatList(!showChatList)}
                >
                    {showChatList ? 'Show Chat' : 'Show List'}
                </button>
            )}
        </div>
    );
}

export default ChatPage;
