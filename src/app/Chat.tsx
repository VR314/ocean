import React, { useState } from 'react';
import ChatEntry from './ChatEntry';

interface ChatEntry {
    text: string;
    isLLM: boolean;
}

const Chat = ({ eventText }) => {
    const [textValue, setTextValue] = useState('');
    const [chatEntries, setChatEntries] = useState([ChatEntry]);
    const [isLoading, setLoading] = useState(false);

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleAddChatEntry = () => {
        setLoading(true);
        if (textValue.trim() !== '') {
            const newChatEntry = {
                text: textValue,
                isLLM: false
            };

            setChatEntries([...chatEntries, newChatEntry]);

            setTextValue('');

            fetch('/api/adviceGenerator')
                .then((res) => res.json())
                .then((message) => {
                    const newLLMEntry = { text: message as string, isLLM: true };
                    setChatEntries([...chatEntries, newLLMEntry]);
                    setLoading(false);
                });
        }

    };

    return (
        <div>
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
