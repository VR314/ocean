import React, { useState } from 'react';
import ChatEntry from './ChatEntry';
import "./Chat.css";
import ChatLogs from './ChatLogs';


export interface ChatEntryObject {
    text:string;
    isLLM:boolean;
}

interface ChatProps {
    eventText:string;
    toggleModal:boolean;
}

const Chat = (props:ChatProps) => {
    const [textValue, setTextValue] = useState('');
    const [chatEntries, setChatEntries] = useState([{text: props.eventText, isLLM: false}]);

    // ADD LLM TO QUESTIONS HERE

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleAddChatEntry = () => {
        setLoading(true);
        if (textValue.trim() !== '') {
            const newUserChatEntry = {
                text: textValue,
                isLLM: false
            };

            setChatEntries([...chatEntries, newChatEntry]);

            setTextValue('');

            fetch('/api/adviceGenerator', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: textValue })
            })
                .then((res) => res.json())
                .then((message) => {
                    console.log(message);
                    const newLLMEntry = { text: message.message as string, isLLM: true };
                    setChatEntries([...chatEntries, newLLMEntry]);
                    setLoading(false);
                    console.log(newLLMEntry);
                });
        }

    };
    

    return (
        <div className="chat-whole">
            {/* ADD THE API STUFF HERE, EVENT TEXT IS THE INITIAL SCENARIO AND REPLACE EVENT TEXT HERE WITH THE QUESTION AND SLIDERS */}
            <span>{eventText}</span>
            {isLoading &&
                <span>{'LOADING'}</span>}

            <input
                name="textValue"
                className="input"
                value={textValue}
                onChange={handleChange}

            />
            <button onClick={handleAddChatEntry}>></button>
            {chatEntries.map((entry, index) => (
                <ChatEntry key={index} text={entry.text} isLLM={entry.isLLM} />
            ))}
        </div>
    );
};

export default Chat;
