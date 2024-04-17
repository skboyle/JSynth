import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

function SynthEngine({ attack, decay, sustain, release }) {
  const [synth] = useState(new Tone.PolySynth().toDestination());

  useEffect(() => {
    synth.set({
      oscillator: {
        type: 'triangle',
      },
      envelope: {
        attack,
        decay,
        sustain,
        release,
      },
    });

    return () => {
      synth.dispose();
    };
  }, [attack, decay, sustain, release, synth]);

  return (
    <div>
      {/* This component doesn't render anything visible */}
    </div>
  );
}

export default SynthEngine;

