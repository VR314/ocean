import React from 'react';
import "./Chat.css"
import ChatEntry from './ChatEntry';
import {ChatEntryObject} from './Chat'

interface ChatLogsProps {
    chatEntries: ChatEntryObject[];
}

const ChatLogs = (props:ChatLogsProps) => {
    return (
        <div className = "chat-chats">
                {props.chatEntries.map((entry, index) => (
                    <ChatEntry key={index} text={entry.text} isLLM={entry.isLLM} />
                ))}
        </div>
    );
};

export default ChatLogs;