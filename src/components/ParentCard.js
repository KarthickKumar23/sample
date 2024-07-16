import React from 'react';
import './ParentCard.css';

const ParentCard = ({ children }) => {
  return (
    <div className="parent-card">
          <h2>Weaving a Leagacy of Quality</h2>
          <button>Know More</button>
      {children}
     
    </div>
  );
};

export default ParentCard;
