import React from 'react';
import "./ChatEntry.css"

interface ChatEntryProps {
    text: string;
    isLLM: boolean;
}

const ChatEntry = (props: ChatEntryProps) => {
    const containerClass = props.isLLM ? 'container-LLM' : 'container-user';

    return (
        <div className={containerClass}>
            {props.isLLM ? (
                <div>
                    <p>Alternative content</p>
                    <span>11:00</span>
                </div>
            ) : (
                <div>
                    User
                    <p>{props.text}</p>
                    <span>11:00</span>
                </div>
            )}
        </div>
    );
};

export default ChatEntry;
