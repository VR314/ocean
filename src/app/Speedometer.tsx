"use client";
import styles from './speedometer.module.css';

import React, { useEffect } from 'react';

export function createProgressBars() {
  const barCount = 50;
  const percent1 = (50 * 90) / 100;
  const percent2 = (50 * 80) / 100;
  const percent3 = (50 * 70) / 100;
  const percent4 = (50 * 60) / 100;
  const percent5 = (50 * 50) / 100;

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
        {createBarsAndText(percent1, 'selected1', '90%')}
      </div>
      <div className="progress">
        {createBarsAndText(percent2, 'selected2', '80%')}
      </div>
      <div className="progress">
        {createBarsAndText(percent3, 'selected3', '70%')}
      </div>
      <div className="progress">
        {createBarsAndText(percent4, 'selected4', '60%')}
      </div>
      <div className="progress">
        {createBarsAndText(percent5, 'selected5', '50%')}
      </div>
    </div>
  );
}


