'use client';
import React, { useEffect, useState } from 'react';
import ChatEntry from './ChatEntry';
import { useChat } from 'ai/react';
import { Message } from 'ai';

interface ChatEntryObject {
    text: string;
    isLLM: boolean;
}

interface ChatProps {
    eventText: string;
}

const Chat = (props: ChatProps) => {
    const [chatEntries, setChatEntries] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/adviceGeneratorStream',
    });


    const messageToChatEntryObject = (message: Message): ChatEntryObject => {
        return {
            text: message.content,
            isLLM: false
        };
    };


    useEffect(() => {
        if (messages.length !== 0) {
            setLoading(true);
            if (input.trim() !== '') {
                const newChatEntry: ChatEntryObject = messageToChatEntryObject(messages[messages.length - 1]);

                setChatEntries([...chatEntries, newChatEntry]);

                /*
                fetch('/api/adviceGenerator')
                    .then((res) => res.json())
                    .then((message) => {
                        console.log(message);
                        const newLLMEntry = { text: message.message as string, isLLM: true };
                        setChatEntries([...chatEntries, newLLMEntry]);
                        setLoading(false);
                        console.log(newLLMEntry);
                    });
                    */
            }
        }
    }, [messages]);

    return (
        <div>
            {/* ADD THE API STUFF HERE, EVENT TEXT IS THE INITIAL SCENARIO AND REPLACE EVENT TEXT HERE WITH THE QUESTION AND SLIDERS */}
            <span>{props.eventText}</span>
            {isLoading &&
                <span>{'LOADING'}</span>}

            <input
                name="textValue"
                className="input"
                value={input}
                onChange={handleInputChange}

            />
            <form onSubmit={handleSubmit}>
                <button type="submit">{'>'}</button>
            </form>
            {chatEntries.map((entry, index) => (
                <ChatEntry key={index} text={entry.text} isLLM={entry.isLLM} />
            ))}
        </div>
    );
};

export default Chat;
