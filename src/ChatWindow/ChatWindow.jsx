import React from 'react';
import styles from "./ChatWindow.module.css";
import Message from "../Message/Message";

const ChatWindow = ({ chat }) => {
    return (
        <div className={styles.root}>
            {chat.map((message) => <Message key={message.id} message={message}/>)}
        </div>
    );
};

export default ChatWindow;