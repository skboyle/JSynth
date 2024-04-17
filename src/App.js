import React, { useEffect, useState } from 'react';
import AudioKeys from 'audiokeys';
import SynthComponent from './components/Synth'; // Rename Synth to SynthComponent
// import Sequencer from './components/Sequencer';

import * as Tone from 'tone';
import { map } from 'lodash';

function Synth() {
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    setup();
  }, []);

  function setup() {
    const newSynth = makePianoetta().instrument;
    setSynth(newSynth);

    const keyboard = new AudioKeys();

    keyboard.down((note) => {
      const velToGain = map(note.velocity, 0, 127, 0, 1);
      newSynth.triggerAttack(note.frequency, Tone.now(), velToGain);
    });

    keyboard.up((note) => newSynth.triggerRelease());
  }

  function makePianoetta() {
    const instrument = new Tone.MonoSynth();
    const synthJSON = {
      oscillator: {
        type: 'square',
      },
      filter: {
        Q: 2,
        type: 'lowpass',
        rolloff: -12,
      },
      envelope: {
        attack: 0.5,
        decay: 3,
        sustain: 0,
        release: 0.45,
      },
      filterEnvelope: {
        attack: 1,
        decay: 0.32,
        sustain: 0.9,
        release: 3,
        baseFrequency: 150,
        octaves: 4,
      },
    };

    instrument.set(synthJSON);

    // Connect the synth to the destination
    instrument.toDestination();

    // Define a function to dispose the synth
    function deepDispose() {
      if (instrument) {
        instrument.dispose();
      }
    }

    return {
      instrument,
      deepDispose,
    };
  }

  return (
    <div>
      <h1>Synth</h1>
      <SynthComponent /> {/* Render your Synth component */}
      {/* <Sequencer /> Render the Sequencer component */}
    </div>
  );
}

export default Synth;
