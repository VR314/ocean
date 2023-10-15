import React, { useState } from 'react';
import ChatEntry from './ChatEntry';

const Chat = ({eventText}) => {
    const [textValue, setTextValue] = useState('');
    const [chatEntries, setChatEntries] = useState([]);

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleAddChatEntry = () => {
        if (textValue.trim() !== '') {
            const newChatEntry = {
                text: textValue,
                isLLM: false
            };

            const newLLMEntry = {
                text: textValue,
                isLLM: true
            };

            setChatEntries([...chatEntries, newChatEntry, newLLMEntry]);

            setTextValue('');
        }
    };

    return (
        <div>
            {/* ADD THE API STUFF HERE, EVENT TEXT IS THE INITIAL SCENARIO AND REPLACE EVENT TEXT HERE WITH THE QUESTION AND SLIDERS */}
            <span>{eventText}</span> 
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
