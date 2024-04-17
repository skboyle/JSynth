import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import ControlPanel from './ControlPanel';
import Keyboard from './Keyboard';
import SynthEngine from './SynthEngine';

function PolySynth() {
  const [attack, setAttack] = useState(0.1);
  const [decay, setDecay] = useState(0.1);
  const [sustain, setSustain] = useState(0.5);
  const [release, setRelease] = useState(1);
  const [audioContextStarted, setAudioContextStarted] = useState(false);

  useEffect(() => {
    const startAudioContext = () => {
      if (!audioContextStarted && Tone.context.state !== 'running') {
        Tone.start();
        setAudioContextStarted(true);
      }
    };

    // Start the audio context when the component mounts
    startAudioContext();

    // Cleanup function
    return () => {
      // Release any resources if needed
    };
  }, [audioContextStarted]);

  const handleStartAudioContext = () => {
    // Start the audio context explicitly when the user clicks a button
    if (!audioContextStarted && Tone.context.state !== 'running') {
      Tone.start();
      setAudioContextStarted(true);
    }
  };

  return (
    <div className="poly-synth-container">
      <h2>Polyphonic Subtractive Synthesizer</h2>
      <ControlPanel
        attack={attack}
        decay={decay}
        sustain={sustain}
        release={release}
        setAttack={setAttack}
        setDecay={setDecay}
        setSustain={setSustain}
        setRelease={setRelease}
      />
      <SynthEngine attack={attack} decay={decay} sustain={sustain} release={release} />
      <Keyboard />
      <button onClick={handleStartAudioContext} style={{ display: 'none' }}>Start Audio Context</button>
    </div>
  );
}

export default PolySynth;

