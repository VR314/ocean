"use client";
import React, {useEffect} from 'react';
import Profile from "./Profile"
import { createProgressBars } from '../app/Speedometer';
import "./Profile.module.css"

const HomeScreen = () => {
    useEffect(() => {
        createProgressBars();
      }, []);
    
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <Profile/> 
              {createProgressBars()}
              <div className="progress"></div>
              <div className="progress"></div>
              <div className="progress"></div>
              <div className="progress"></div>
              <div className="progress"></div>
        </main>
      )
};

export default HomeScreen;