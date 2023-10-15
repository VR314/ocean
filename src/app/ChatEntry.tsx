import React, { useState } from 'react';
import './ChatEntry.css';
import Question from './Question';

interface ChatEntryProps {
  text: string;
  isLLM: boolean;
  message: boolean;
}

const ChatEntry = (props: ChatEntryProps) => {
  const containerClass = props.isLLM ? 'container-LLM' : 'container-user';
  const questions: string[] = [
    'Is very involved',
    'Has extreme mood behaviors',
    'Is cautious of others feelings',
    'Tried new stuff',
    'Not very opinionated',
  ];

  const [sliderValues, setSliderValues] = useState<number[]>(
    Array(questions.length).fill(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
  );

  const handleSliderChange = (value, index) => {
    const updatedValues = [...sliderValues];
    updatedValues[index] = value;
    setSliderValues(updatedValues);
  };

  // Function to handle the "Submit" button
  const handleButtonClick = () => {
    


    saveSliderValues(sliderValues);

    console.log('Extraversion Score:', sliderValues[0].toString());
    console.log('Agreeableness Score:', sliderValues[4].toString());
    console.log('Conscientiousness Score:', sliderValues[2].toString());
    console.log('Neuroticism Score:', sliderValues[1].toString());
    console.log('Openness Score:', sliderValues[3].toString());

    localStorage.setItem('event_extraversion', sliderValues[0].toString());
    localStorage.setItem('event_agreeableness', sliderValues[4].toString());
    localStorage.setItem('event_conscientiousness', sliderValues[2].toString());
    localStorage.setItem('event_neuroticism', sliderValues[1].toString());
    localStorage.setItem('event_openness', sliderValues[3].toString());
  };

  // Define a function to save the slider values
  const saveSliderValues = (values) => {
    // Perform your desired action here, e.g., save to an array or send to an API
    console.log('Saving Slider Values:', values);
    localStorage.setItem('slidervals', JSON.stringify(sliderValues));
  };



  return (
    <div className={containerClass}>
      {props.message ? (
        <div>
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question}
              value={sliderValues[index]}
              onSliderChange={(value) => handleSliderChange(value, index)}
            />
          ))}
          <button onClick={handleButtonClick} className="button">
            Submit
          </button>
        </div>
      ) : (
        <div>
          {props.isLLM ? (
            <div>
                Therapist
                <p>{props.text}</p>
            </div>
          ) : (
            <div>
              Vivek Chittepu
              <p>{props.text}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatEntry;
