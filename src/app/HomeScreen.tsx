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
        <main >
              <Profile/> 
              <div className="progress-container">               
                {createProgressBars()}
              </div>
              <div className='progress-label'>
                <br></br>
              <p style = {{fontSize: "xx-large"}}>Openess</p>
              <p style = {{fontSize: "xx-large"}}>Concientiousness</p>
              <p style = {{fontSize: "xx-large"}}>Extraversion</p>
              <p style = {{fontSize: "xx-large"}}>Agreeableness</p>
              <p style={{ fontSize: "xx-large", width: "100px" }}>Neuroticism</p>
              </div>
        </main>
      )
};

export default HomeScreen;