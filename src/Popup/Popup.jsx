import React from 'react';
import cl from './Popup.module.css';

const Popup = ({ isOpen, setIsOpen, onSetAuthor }) => {
    const [text, setText] = React.useState("");

    const onChangeText = (evt) => {
        setText(evt.target.value);
    }

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        onSetAuthor(text);
        setIsOpen(false)
        setText("");
    }

    const rootClasses = [cl.popup]
    if (isOpen) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setIsOpen(false)}>
            <div className={cl.popupContent} onClick={(e) => e.stopPropagation()}>
                <form onSubmit={onFormSubmit}>
                    <p>Введите имя пользователя</p>
                    <input type="text" onChange={onChangeText} value={text}/>
                    <button type="submit"> Отправить </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;