"use client";
import React, { useState } from 'react';
import "./Tabs.css";
import EventPage from "./EventPage";

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: 2,
            tabTitle: 'Event',
            content: (
                <EventPage />
            )
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            content: (
                <div>
                    <p>Hi, page 3</p>
                </div>
            )
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && (
                            <div>
                                <p className='title'>{tab.title}</p>
                                <p>{tab.content}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;