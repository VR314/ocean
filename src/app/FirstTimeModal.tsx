import React, { useState } from 'react';
import Modal from 'react-modal';
import Question from './Question';

    const FirstTimeModal = ({ isOpen, onRequestClose }) => {
        const questions: string[] = [   "Is talkative",   "Tends to find fault with others",   "Does a thorough job",   "Is depressed, blue",   "Is original, comes up with new ideas",   "Is reserved",   "Is helpful and unselfish with others",   "Can be somewhat careless",   "Is relaxed, handles stress well",   "Is curious about many different things",   "Is full of energy",   "Starts quarrels with others",   "Is a reliable worker",   "Can be tense",   "Is ingenious, a deep thinker",   "Generates a lot of enthusiasm",   "Has a forgiving nature",   "Tends to be disorganized",   "Worries a lot",    "Has an active imagination",   "Tends to be quiet",   "Is generally trusting",   "Tends to be lazy",   "Is emotionally stable, not easily upset",   "Is inventive",   "Has an assertive personality",   "Can be cold and aloof",   "Perseveres until the task is finished",   "Can be moody",   "Values artistic, aesthetic experiences",   "Is sometimes shy, inhibited",   "Is considerate and kind to almost everyone",   "Does things efficiently",   "Remains calm in tense situations",   "Prefers work that is routine",   "Is outgoing, sociable",   "Is sometimes rude to others",   "Makes plans and follows through with them",   "Gets nervous easily",   "Likes to reflect, play with ideas",   "Has few artistic interests",   "Likes to cooperate with others",   "Is easily distracted",   "Is sophisticated in art, music, or literature"  ];

        const [sliderValues, setSliderValues] = useState<number[]>(Array(questions.length).fill(((Math.random() * (5 - 1 + 1)) + 1)));
      
        const handleSliderChange = (value, index) => {
          const updatedValues = [...sliderValues];
          updatedValues[index] = value;
          setSliderValues(updatedValues);
        };
      
        // Function to handle the "Close" button
        const handleCloseClick = () => {
          saveSliderValues(sliderValues);
          console.log('Slider Values:', sliderValues);
            
          console.log('Close button clicked');

          const postData = {
            "answers": JSON.parse(localStorage.getItem("slidervals"))
          };
          
          fetch('/api/bfi', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          })
            .then((response) => response.json())
            .then((data) => {
                const { extraversion, agreeableness, conscientiousness, neuroticism, openness } = data;

                console.log('Extraversion Score:', extraversion);
                console.log('Agreeableness Score:', agreeableness);
                console.log('Conscientiousness Score:', conscientiousness);
                console.log('Neuroticism Score:', neuroticism);
                console.log('Openness Score:', openness);

                localStorage.setItem('extraversion', extraversion);
                localStorage.setItem('agreeableness', agreeableness);
                localStorage.setItem('conscientiousness', conscientiousness);
                localStorage.setItem('neuroticism', neuroticism);
                localStorage.setItem('openness', openness);
            })
            .catch((error) => {
              // Handle errors
              console.error('Error:', error);
            });

            // Close the modal
          onRequestClose();
          
        };
      
        // Define a function to save the slider values
        const saveSliderValues = (values) => {
          // Perform your desired action here, e.g., save to an array or send to an API
          console.log('Saving Slider Values:', values);
          localStorage.setItem("slidervals", JSON.stringify(sliderValues));
        };
      
        return (
          <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Welcome Modal">
            <div className = "init-container">
              {questions.map((question, index) => (
                <Question 
                  key={index}
                  question={question}
                  value={sliderValues[index]}
                  onSliderChange={(value) => handleSliderChange(value, index)}
                />
              ))}
            </div>
            <button onClick={handleCloseClick} className="button">Save & Close</button>
          </Modal>
        );
      };
      
      export default FirstTimeModal;
      