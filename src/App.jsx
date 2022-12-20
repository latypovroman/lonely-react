import React from 'react';
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatForm from "./components/ChatForm/ChatForm";
import Popup from "./components/Popup/Popup";
import "./App.css";
import logo from "./logo/logo.png";

const defaultChat = [{
        author: "Одинокий тюлень",
        id: 1,
        text: `Привет, ${sessionStorage.getItem("author") || "Незнакомец"}!`,
    },
    {
        author: "Одинокий тюлень",
        id: 2,
        text: "Это чат для одиноких или странных",
    },
    {
        author: "Одинокий тюлень",
        id: 3,
        text: "Тут тебя примут таким(ой), какой ты есть, ведь ты общаешься сам(а) с собой",
    }]

const App = () => {
    const [chat, setChat] = React.useState([]);
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

    }, [chat, storedChat])

    const onSendMessage = (text) => {
        const message = {
            author: author || "Аноним",
            id: new Date().getTime(),
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