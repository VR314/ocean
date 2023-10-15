import React, { useState } from 'react';
import "../app/EventPage.css";
import History from "./History";

const EventPage = () => {
    const [textValue, setTextValue] = useState('');
    const [items, setItems] = useState<{ id: number; label: string; }[]>([]);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTextValue(e.target.value);
    };

    const handleAddEvent = () => {
        // Create a new item object with a unique ID and the label from the input
        const newItemObject = {
            id: new Date().getTime(), // Unique ID (using timestamp)
            label: textValue,
        };

        // Update the items state by adding the new item to the existing list
        setItems([...items, newItemObject]);

        // Clear the input field
        setTextValue('');
    };

    return (
        <div>
                <textarea
                    name="textValue"
                    className="input"
                    rows={7}
                    value={textValue}
                    onChange={handleChange}
                />
                <br />
                <button className="button" onClick={handleAddEvent} style = {{color: "black"}}>Add Event</button>
                <History items = {items}/>
        </div>
    );
};

export default EventPage;