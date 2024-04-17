import React, { useState } from 'react';
import './Sequencer.css'; // Import CSS file for styling

function Sequencer({ synth }) {
  // Define the keys and steps
  const keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const steps = Array.from({ length: 16 }, (_, i) => i);

  // Initialize a 2D array to store the state of each cell (key-step combination)
  const [sequence, setSequence] = useState(
    Array.from({ length: keys.length }, () => Array(steps.length).fill(false))
  );

  // Function to toggle whether a note is played on a specific key-step combination
  const toggleNote = (keyIndex, stepIndex) => {
    const updatedSequence = [...sequence];
    updatedSequence[keyIndex][stepIndex] = !updatedSequence[keyIndex][stepIndex];
    setSequence(updatedSequence);
  };

  // Function to play the sequence
  const playSequence = () => {
    steps.forEach((step, stepIndex) => {
      keys.forEach((key, keyIndex) => {
        if (sequence[keyIndex][stepIndex]) {
          synth.triggerAttackRelease(`${key}4`, '8n');
        }
      });
    });
  };

  return (
    <div>
      <div className="sequencer">
        {/* Render the grid */}
        {keys.map((key, keyIndex) => (
          <div key={key} className="row">
            {steps.map((step, stepIndex) => (
              <div
                key={step}
                className={`cell ${sequence[keyIndex][stepIndex] ? 'active' : ''}`}
                onClick={() => toggleNote(keyIndex, stepIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={playSequence}>Play</button>
    </div>
  );
}

export default Sequencer;
