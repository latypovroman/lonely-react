import React, {useState} from 'react';
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatForm from "./ChatForm/ChatForm";
import Popup from "./Popup/Popup";

const defaultChat = [{
        author: "Одинокий голубь",
        id: 1,
        text: "Привет!"
    },
    {
        author: "Одинокий голубь",
        id: 2,
        text: "Это чат для одиноких или странных"
    },
    {
        author: "Одинокий голубь",
        id: 3,
        text: "Тут тебя примут таким(ой), какой ты есть, ведь ты общаешься сам(а) с собой"
    }]

const App = () => {
    const [chat, setChat] = React.useState(defaultChat);
    const [idCount, setIdCount] = React.useState(4);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [author, setAuthor] = React.useState("Аноним");

    React.useEffect(() => {
        setIsPopupOpen(true);
    }, [])

    const onSendMessage = (text) => {
        const message = {
            author: author || "Аноним",
            id: idCount || new Date().getTime(),
            text: text,
        };
        setIdCount(idCount + 1);
        setChat([...chat, message]);
    }

    const onSetAuthor = (text) => {
        setAuthor(text);
        setIsPopupOpen(false);
    }

    return (
        <>
            <ChatWindow chat={chat}/>
            <ChatForm onSendMessage={onSendMessage}/>
            <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} onSetAuthor={onSetAuthor}/>
        </>
    );
};

export default App;