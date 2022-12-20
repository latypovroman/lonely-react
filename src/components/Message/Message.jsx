import React from 'react';
import styles from "./Message.module.css"

const Message = ({ message }) => {
    const authorClasses = [styles.author];
    const textClasses = [styles.text];

    const author = sessionStorage.getItem("author");
    if (author !== message.author) {
        authorClasses.push(styles.companion);
        textClasses.push(styles.companion);
    }

    return (
        <div className={styles.message}>
            <p className={authorClasses.join(' ')}>{message.author}</p>
            <p className={textClasses.join(' ')}>{message.text}</p>
        </div>
    );
};

export default Message;