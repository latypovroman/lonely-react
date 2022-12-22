import React from 'react';
import Message from "../Message/Message";

const ChatWindow = ({ chat }) => {
    return (
        <div>
            {
                chat.length > 0
                    ? chat.map((message, index) => <Message key={index} message={message}/>)
                    : "Нажми на отправить, чтобы начать сходить с ума от одиночества"
            }
        </div>
    );
};

export default ChatWindow;