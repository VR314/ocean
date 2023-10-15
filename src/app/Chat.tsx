import React, { useEffect, useState } from 'react';
import ChatEntry from './ChatEntry';
import "./Chat.css";
import ChatLogs from './ChatLogs';


export interface ChatEntryObject {
    text:string;
    isLLM:boolean;
    message:boolean;
}

type QuestionType = {
    question: string;
    trait: string;
};

interface ChatProps {
    eventText:string;
    toggleModal:boolean;
}

const Chat = (props:ChatProps) => {
    const [textValue, setTextValue] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [chatEntries, setChatEntries] = useState([{text: props.eventText, isLLM: false, message:false}, {text: props.eventText, isLLM: true, message:true}]);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch('/api/questionGenerator', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ message: props.eventText })
    //     })
    //         .then((res) => res.json())
    //         .then((message) => {
    //             //console.log(message);
    //             // setChatEntries([...chatEntries, newLLMEntry]);
    //             setLoading(false);
    //             setQuestions(message);
    //             //console.log(questions);
                
                
    //             // const newUserChatEntry = {
    //             //     text: textValue,
    //             //     isLLM: true,
    //             //     message: questions
    //             // };

    //             // setChatEntries([...chatEntries, newUserChatEntry]);
    //         });
    // }, [])


    // ADD LLM TO QUESTIONS HERE

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleAddChatEntry = () => {
        setLoading(true);
        if (textValue.trim() !== '') {
            const newUserChatEntry = {
                text: textValue,
                isLLM: false,
                message: false
            };

            setChatEntries([...chatEntries, newUserChatEntry]);

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
                    const newLLMEntry = { text: message.message as string, isLLM: true, message: false};
                    setChatEntries([...chatEntries, newLLMEntry]);
                    setLoading(false);
                    console.log(newLLMEntry);
                });
        }

    };
    

    return (
        <div className="chat-whole">
            {isLoading &&
                <span>{'LOADING'}</span>}

            {chatEntries.map((entry, index) => (
                <ChatEntry key={index} text={entry.text} isLLM={entry.isLLM} message={entry.message} />
            ))}
            <div>
                <input
                    name="textValue"
                    className="chat-input"
                    value={textValue}
                    onChange={handleChange}

                />
                <button onClick={handleAddChatEntry} className="chat-button">Send</button>
            </div>
        </div>
    );
};

export default Chat;
