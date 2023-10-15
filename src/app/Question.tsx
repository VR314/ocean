import React, { useState } from 'react';
import "./Question.css";

interface QuestionProps {
  question: string;
  onClose: (value: number) => void;
}

const Question = (props: QuestionProps) => {
  const [sliderValue, setSliderValue] = useState(3); 

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  const handleCloseClick = () => {
    props.onClose(sliderValue);
  };

  return (
    <div className = "init-question">
      <p style={{ fontSize: 'x-large', fontFamily: 'Courier New, Courier, monospace' }}>{props.question}</p>
      <input
        type="range"
        min={1}
        max={5}
        step={.1}
        value={sliderValue}
        onChange={handleSliderChange}
        style={{ width: '100%', height: '20px' }}
      />
      <p style={{fontFamily: 'Courier New, Courier, monospace' }}>Slider Value: {sliderValue}</p>
    </div>
  );
};

export default Question;
