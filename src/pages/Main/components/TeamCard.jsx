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
           <img alt={strLeague} src={strTeamJersey!==null?strTeamJersey:'https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png'} className="image-card" />
           <div className="products-txt">{strLeague}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
