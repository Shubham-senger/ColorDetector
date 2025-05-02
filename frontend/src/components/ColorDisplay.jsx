import React from 'react';





export default function ColorDisplay({ color }) {


  return (
    <div className="color-display">
      <div className="color-swatch" style={{ backgroundColor: color }}></div>
      <div className="color-details">
        <span>{color}</span>
      </div>
    </div>
  );
}
