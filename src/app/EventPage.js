import React, { useState } from 'react';
import "../app/EventPage.css"

const EventPage = () => {
    const [textValue, setTextValue] = useState('');

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleAddEvent = () => {
        console.log(textValue);
    };
    return (
        <div>
            <textarea
                type="textarea"
                name="textValue"
                className = "input"
                rows = "7"
                value={textValue}
                onChange={handleChange}
            />
            <br/>
            <button className = "button" onClick={handleAddEvent}>Add Event</button>
        </div>
    );
} 

export default EventPage;