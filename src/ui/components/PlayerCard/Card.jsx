import React from "react";
import "./PlayerCard.css";
const Card = ({ title, children, back }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          {children}
          <div className="products-txt">{title}</div>
        </div>
        <div className="back">{back}</div>
      </div>
    </div>
  );
};

export default Card;
