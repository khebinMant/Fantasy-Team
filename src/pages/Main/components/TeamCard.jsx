import React from "react";

const Card = ({ strTeamJersey, strAlternate, children,strLeague }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          {children}
          <div className="products-txt">{strAlternate}</div>
        </div>
        <div className="back">
           <img alt="porelmomento" src={strTeamJersey!==null?strTeamJersey:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Golden_star_2.svg/282px-Golden_star_2.svg.png'} className="image-card" />
           <div className="products-txt">{strLeague}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
