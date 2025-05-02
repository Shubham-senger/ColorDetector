import React from 'react';

export default function ToggleSwitch({ label, isOn, onToggle }) {
  return (
    <div style={{ margin: '10px' }}>
      <label style={{ color: 'white', fontWeight: 'bold' }}>{label}: </label>
      <button className="btn" onClick={onToggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}