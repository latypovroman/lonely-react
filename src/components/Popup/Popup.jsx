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
                <h2>Введите имя пользователя</h2>
                <form className={cl.form} onSubmit={onFormSubmit}>
                    <input className={cl.input} type="text" onChange={onChangeText} value={text}/>
                    <button className={cl.button} type="submit"> Отправить </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;