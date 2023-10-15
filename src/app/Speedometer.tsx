"use client";
import styles from './speedometer.module.css';

import React, { useEffect } from 'react';

export function createProgressBars() {
  const barCount = 50;
  const percent1 = (50 * ((localStorage.getItem("openness")/9)*20)) / (100);
  const percent2 = (50 * ((localStorage.getItem("conscientiousness")/9)*20)) / 100;
  const percent3 = (50 * ((localStorage.getItem("extraversion")/9)*20)) / 100;
  const percent4 = (50 * ((localStorage.getItem("agreeableness")/9)*20)) / 100;
  const percent5 = (50 * ((localStorage.getItem("neuroticism")/9)*20)) / 100;

  function createBarsAndText(percentage: number, className: string, text: string) {
    const bars = [];

    for (let index = 0; index < barCount; index++) {
      const barClassName = index < percentage ? className : '';
      bars.push(<i key={index} style={{ ['--i' as any]: index }} className={barClassName}></i>);
    }

    bars.push(<p key="text" className="selected percent-text">{text}</p>);

    return bars;
  }

  return (
    <div className="progress-container">
      <div className="progress">
        {createBarsAndText(percent1, 'selected1', (localStorage.getItem("openness")/9).toFixed(2).toString())}
      </div>
      <div className="progress">
        {createBarsAndText(percent2, 'selected2', (localStorage.getItem("conscientiousness")/9).toFixed(2).toString())}
      </div>
      <div className="progress">
        {createBarsAndText(percent3, 'selected3', (localStorage.getItem("extraversion")/9).toFixed(2).toString())}
      </div>
      <div className="progress">
        {createBarsAndText(percent4, 'selected4', (localStorage.getItem("agreeableness")/9).toFixed(2).toString())}
      </div>
      <div className="progress">
        {createBarsAndText(percent5, 'selected5', (localStorage.getItem("neuroticism")/9).toFixed(2).toString())}
      </div>
    </div>
  );
}


