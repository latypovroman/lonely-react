import React from 'react';

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
        <form onSubmit={onFormSubmit}>
            <input type="text" onChange={onChangeText} value={text}/>
            <button type="submit"> Отправить </button>
        </form>
    );
};

export default ChatForm;