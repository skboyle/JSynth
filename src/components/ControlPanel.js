import React from 'react';

function ControlPanel({ attack, decay, sustain, release, setAttack, setDecay, setSustain, setRelease }) {
  return (
    <div className="controls">
      <label>Attack:</label>
      <input type="range" min="0" max="1" step="0.01" value={attack} onChange={(e) => setAttack(parseFloat(e.target.value))} />
      <br />
      <label>Decay:</label>
      <input type="range" min="0" max="1" step="0.01" value={decay} onChange={(e) => setDecay(parseFloat(e.target.value))} />
      <br />
      <label>Sustain:</label>
      <input type="range" min="0" max="1" step="0.01" value={sustain} onChange={(e) => setSustain(parseFloat(e.target.value))} />
      <br />
      <label>Release:</label>
      <input type="range" min="0" max="3" step="0.01" value={release} onChange={(e) => setRelease(parseFloat(e.target.value))} />
    </div>
  );
}

export default ControlPanel;