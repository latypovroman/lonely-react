import React from 'react';
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatForm from "./components/ChatForm/ChatForm";
import Popup from "./components/Popup/Popup";
import "./App.css";
import logo from "./logo/logo.png";

const defaultChat = [{
        author: "Одинокий тюлень",
        text: `Привет!`,
    },
    {
        author: "Одинокий тюлень",
        text: "Это чат для одиноких или странных",
    },
    {
        author: "Одинокий тюлень",
        text: "Тут тебя примут таким(ой), какой ты есть, ведь ты общаешься сам(а) с собой",
    }]

const App = () => {
    const [chat, setChat] = React.useState([]);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const author = sessionStorage.getItem("author");


    React.useEffect(() => {
        if (!author) {
            setIsPopupOpen(true);
        }
    }, [author])

    React.useEffect(() => {
        const interval = setInterval(() => {
            const storedParsedChat = JSON.parse(localStorage.getItem("chat"));
            if (storedParsedChat) {
                setChat(storedParsedChat)
            }
        }, 700)
        return () => clearInterval(interval);
    }, [chat])

    const onSendMessage = (text) => {
        const message = {
            author: author || "Аноним",
            text: text,
        };
        const newChat = [...chat, message];
        setChat(newChat);
        localStorage.setItem("chat", JSON.stringify(newChat));
    }

    const onSetAuthor = (text) => {
        sessionStorage.setItem("author", text);
        setIsPopupOpen(false);
        setChat(defaultChat);
    }

    return (
        <div className="app">
            <img className="app__logo" alt="forever-alone" src={logo} />
            <h1>Extremely lonely chat</h1>
            <ChatWindow chat={chat}/>
            <ChatForm onSendMessage={onSendMessage}/>
            <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} onSetAuthor={onSetAuthor}/>
        </div>
    );
};

export default App;