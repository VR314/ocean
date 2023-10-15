"use client";
import React, { useState, useEffect } from 'react';
import FirstTimeModal from './FirstTimeModal';
import Tabs from './Tabs';

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('visitedBefore');
    if (!hasVisitedBefore) {
      // It's the first visit
      setIsFirstVisit(true);
      //localStorage.setItem('visitedBefore', 'true');
    }
  }, []);

  const closeModal = () => {
    setIsFirstVisit(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tabs />
      <FirstTimeModal isOpen={isFirstVisit} onRequestClose={closeModal} />
    </main>
  );
}
