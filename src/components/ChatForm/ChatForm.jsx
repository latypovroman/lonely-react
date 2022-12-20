import React from 'react';
import styles from "./ChatForm.module.css";

const ChatForm = ({ onSendMessage }) => {
    const [text, setText] = React.useState("");

    const onChangeText = (evt) => {
        setText(evt.target.value);
    }

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        onSendMessage(text);
        setText("");
    }

    return (
        <form className={styles.form} onSubmit={onFormSubmit}>
            <input
                className={styles.input}
                type="text"
                onChange={onChangeText}
                value={text}
                placeholder="Писать сюда (но какой смысл?)"
            />
            <button className={styles.button} type="submit"> Отправить </button>
        </form>
    );
};

export default ChatForm;