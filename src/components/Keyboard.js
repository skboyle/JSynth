import React, { useEffect } from 'react';

function Keyboard({ playNote, releaseNote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const note = convertKeyCodeToNote(e.keyCode);
      if (note) {
        playNote && playNote(note);
      }
    };

    const handleKeyUp = (e) => {
      const note = convertKeyCodeToNote(e.keyCode);
      if (note) {
        releaseNote && releaseNote(note);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [playNote, releaseNote]);

  const convertKeyCodeToNote = (keyCode) => {
    const keyMap = {
      65: 'C4', // 'A'
      87: 'C#4', // 'W'
      83: 'D4', // 'S'
      69: 'D#4', // 'E'
      68: 'E4', // 'D'
      70: 'F4', // 'F'
      84: 'F#4', // 'T'
      71: 'G4', // 'G'
      89: 'G#4', // 'Y'
      72: 'A4', // 'H'
      85: 'A#4', // 'U'
      74: 'B4', // 'J'
    };

    return keyMap[keyCode];
  };

  return (
    <div className="keyboard">
      {/* Render the keys using buttons */}
      <button onMouseDown={() => playNote && playNote('C4')} onMouseUp={() => releaseNote && releaseNote('C4')}>C</button>
      <button onMouseDown={() => playNote && playNote('C#4')} onMouseUp={() => releaseNote && releaseNote('C#4')}>C#</button>
      <button onMouseDown={() => playNote && playNote('D4')} onMouseUp={() => releaseNote && releaseNote('D4')}>D</button>
      <button onMouseDown={() => playNote && playNote('D#4')} onMouseUp={() => releaseNote && releaseNote('D#4')}>D#</button>
      <button onMouseDown={() => playNote && playNote('E4')} onMouseUp={() => releaseNote && releaseNote('E4')}>E</button>
      <button onMouseDown={() => playNote && playNote('F4')} onMouseUp={() => releaseNote && releaseNote('F4')}>F</button>
      <button onMouseDown={() => playNote && playNote('F#4')} onMouseUp={() => releaseNote && releaseNote('F#4')}>F#</button>
      <button onMouseDown={() => playNote && playNote('G4')} onMouseUp={() => releaseNote && releaseNote('G4')}>G</button>
      <button onMouseDown={() => playNote && playNote('G#4')} onMouseUp={() => releaseNote && releaseNote('G#4')}>G#</button>
      <button onMouseDown={() => playNote && playNote('A4')} onMouseUp={() => releaseNote && releaseNote('A4')}>A</button>
      <button onMouseDown={() => playNote && playNote('A#4')} onMouseUp={() => releaseNote && releaseNote('A#4')}>A#</button>
      <button onMouseDown={() => playNote && playNote('B4')} onMouseUp={() => releaseNote && releaseNote('B4')}>B</button>
    </div>
  );
}

export default Keyboard;

