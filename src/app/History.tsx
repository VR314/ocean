import React, { useState } from 'react';
import "./History.css"

type Item = {
    id: number;
    label: string;
};

type HistoryProps = {
    items: Item[];
};

const History: React.FC<HistoryProps> = ({ items }) => {
    return (
        <div className="scrollable">
            <ul>
                {items.map((item: Item) => (
                    <li key={item.id} className = "list-item">{item.label}</li>
                ))}
            </ul>
        </div>
    );
};

export default History;
