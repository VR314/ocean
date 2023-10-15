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
    const [chatEntries, setChatEntries] = useState([]);

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleAddChatEntry = () => {
        if (textValue.trim() !== '') {
            const newUserChatEntry = {
                text: textValue,
                isLLM: false
            };
    
            const newLLMChatEntry = {
                text: props.eventText,
                isLLM: true
            };
    
            // Add user chat entry first
            setChatEntries((prevChatEntries) => [...prevChatEntries, newUserChatEntry]);
    
            // Then add LLM chat entry
            setTimeout(() => {
                setChatEntries((prevChatEntries) => [...prevChatEntries, newLLMChatEntry]);
            }, 1000); // Adjust the delay as needed
    
            setTextValue('');
        }
    };
    

    return (
        <div className="chat-whole">
            {/* ADD THE API STUFF HERE, EVENT TEXT IS THE INITIAL SCENARIO AND REPLACE EVENT TEXT HERE WITH THE QUESTION AND SLIDERS */}
            <span>{props.eventText}</span> 
            <ChatLogs chatEntries={chatEntries}/>
            <div>
                <input
                    name="textValue"
                    value={textValue}
                    onChange={handleChange}
                    className='chat-input'
                />
                <button onClick={handleAddChatEntry} className = "chat-button"> >>> </button>
            </div>
        </div>
    );
};

export default Chat;
