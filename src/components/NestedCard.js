import React from 'react';
import './NestedCard.css';

const NestedCard = ({ title, content }) => {
  return (
    <div className="nested-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NestedCard;
