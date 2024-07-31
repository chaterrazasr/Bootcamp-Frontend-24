import React, { useState } from 'react';
import Seat from './Seat';
import '../App.css';

const Cinema: React.FC = () => {
  const [seats] = useState(Array(25).fill(null));

  return (
    <div className="seat-grid">
      {seats.map((_, index) => (
        <Seat key={index} />
      ))}
    </div>
  );
};

export default Cinema;

