import React from 'react';
//import "./Chat.css"



const ChatEntry = ({text, isLLM}) => {
    return (
        <div>
            {isLLM ? (
                <>
                    <p>Alternative content</p>
                    <span className="time-left">11:00</span>
                </>
            ) : (
                <>
                    User
                    <p>{text}</p>
                    <span className="time-right">11:00</span>
                </>
            )}
        </div>
    );
};

export default ChatEntry;