import "./History.css"

import React, { useEffect, useState } from 'react';

type Item = {
    id: number;
    label: string;
};

type HistoryProps = {
    items: Item[];
};

const History: React.FC<HistoryProps> = ({ items }) => {
    const [cachedItems, setCachedItems] = useState<Item[]>([]);

    useEffect(() => {
        const cachedData = localStorage.getItem('cachedHistoryData');

        if (cachedData) {
            setCachedItems(JSON.parse(cachedData));
        }
    }, []);

    useEffect(() => {
        if (items.length > 0) {
            setCachedItems(items);

            localStorage.setItem('cachedHistoryData', JSON.stringify(items));
        }
    }, [items]);

    return (
        <div className="scrollable">
            <ul>
                {cachedItems.map((item: Item) => (
                    <li key={item.id} className="list-item">{item.label}</li>
                ))}
            </ul>
        </div>
    );
};

export default History;