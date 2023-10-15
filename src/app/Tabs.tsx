"use client";
import React, { useState } from 'react';
import "./Tabs.css";
import EventPage from "./EventPage";
import Chat from './Chat';
import HomeScreen from './HomeScreen';
import Resources from './Resources';

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Home',
            content: (
                <HomeScreen />
            )
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
            tabTitle: 'Resources',
            content: (
                <Resources />
            )
        }
    ];

    const handleTabClick = (e: any) => {
        setCurrentTab(e.target.id);
    };

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id.toString()} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && (
                            <div>
                                {tab.content}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;