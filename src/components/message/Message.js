import './Messages.scss';
import React, { useState, useRef, useEffect } from 'react';
import SmallAvatar from '../avatar/SmallAvatar';
import NormalAvatar from '../avatar/NormalAvatar';
import { IoCloseOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";

const Message = ({ id, onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hello", type: "send" },
        { text: "Heldsfdsdfadsfsdgagqgwgsdcgsgqalo", type: "send" },
        { text: "Hello", type: "receive" },
        { text: "Hello", type: "receive" },
        { text: "Hello", type: "send" },
        { text: "Hello", type: "send" },
    ]);

    const messagesEndRef = useRef(null);
    const messageContainerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isVisible) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isVisible]);


    return (
        <>
            <div
                className={`messages-container ${isVisible ? 'visible' : 'hidden'}`}
                ref={messageContainerRef}
            >
                <div className="messages-header">
                    <div className="header-right">
                        <SmallAvatar />
                        <span className="header-name">Name</span>
                    </div>
                    <button className="header-closes" onClick={onClose}>
                        <IoCloseOutline />
                    </button>
                </div>
                <div className="messages-body">
                    <div className="avatar-messager">
                        <NormalAvatar />
                    </div>
                    <div className="messager">Name</div>
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`messages-message ${msg.type === 'send' ? 'send' : 'receive'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                <div className="messages-input">
                    <input type="text" placeholder="Type a message..." />
                    <button className="message__send"><IoMdSend /></button>
                </div>
            </div>

        </>
    );
};

export default Message;
