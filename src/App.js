import React from 'react';
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatForm from "./ChatForm/ChatForm";
import Popup from "./Popup/Popup";
import useLocalStorage from "./hooks/useLocalStorage";

const defaultChat = [{
        author: "Одинокий голубь",
        id: 1,
        text: "Привет!",
        received: true
    },
    {
        author: "Одинокий голубь",
        id: 2,
        text: "Это чат для одиноких или странных",
        received: true
    },
    {
        author: "Одинокий голубь",
        id: 3,
        text: "Тут тебя примут таким(ой), какой ты есть, ведь ты общаешься сам(а) с собой",
        received: true
    }]

const App = () => {
    const [chat, setChat] = React.useState(defaultChat);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const author = sessionStorage.getItem("author");
    const storedChat = localStorage.getItem("chat");
    const storedParsedChat = JSON.parse(storedChat);

    React.useEffect(() => {
        if (!author) {
            setIsPopupOpen(true);
        }
    }, [author])

    React.useEffect(() => {
        if (storedChat && (storedParsedChat.length !== chat.length)) {
            setChat(storedParsedChat);
        }
    }, [chat])

    React.useEffect(() => {
        window.addEventListener("storage", (evt) => {
            if (evt.key && storedChat) {
                setChat(storedParsedChat);
            }
        })

    }, [chat])

    const onSendMessage = (text) => {
        const message = {
            author: author || "Аноним",
            id: new Date().getTime(),
            text: text,
            received: false,
        };
        const newChat = [...chat, message];
        setChat(newChat);
        localStorage.setItem("chat", JSON.stringify(newChat));
    }

    const onSetAuthor = (text) => {
        sessionStorage.setItem("author", text);
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