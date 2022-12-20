import React from 'react';
import styles from "./ChatWindow.module.css";
import Message from "../Message/Message";

const ChatWindow = ({ chat }) => {
    return (
        <div>
            {
                chat.length > 0
                    ? chat.map((message) => <Message key={message.id} message={message}/>)
                    : "Нажми на отправить, чтобы начать сходить с ума от одиночества"
            }
        </div>
    );
};

export default ChatWindow;