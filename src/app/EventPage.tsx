import React, { useState } from 'react';
import "../app/EventPage.css";
import History from "./History";
import Modal from 'react-modal';
import Chat from './Chat';

const EventPage = () => {
    const [textValue, setTextValue] = useState('');
    const [items, setItems] = useState<{ id: number; label: string; }[]>([]);
    const [modalOpened, setModalOpened] = useState(false);
    const [eventText, setEventText] = useState('');
    


    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTextValue(e.target.value);
        setEventText(e.target.value)
    };

    const toggleModal = () => {
        if (modalOpened) {
            setModalOpened(!modalOpened);
        }
        if (textValue.trim() !== '') {
            setModalOpened(!modalOpened);
        }
    };


    const handleAddEvent = () => {
        
        toggleModal();
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
                <Modal
                isOpen={modalOpened}
                onRequestClose={toggleModal}
                contentLabel="Modal"
                >
                    <Chat eventText={eventText} toggleModal={modalOpened}/>
                </Modal>
                <History items = {items}/>
        </div>
    );
};

export default EventPage;