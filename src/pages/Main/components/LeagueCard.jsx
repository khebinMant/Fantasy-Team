import { Navigate, useNavigate } from "react-router";

const Card = ({ strTrophy, strLeague, children,strCountry, idLeague,strBadge }) => {

  const navigation = useNavigate()

  return (
    <div 
      className="card-container"
      onClick={()=>navigation(`league/${idLeague}`)}
    >
      <div className="card">
        <div className="front">
          {children}
          <div className="products-txt">{strLeague}</div>
        </div>
        <div className="back">
           <img alt={strTrophy} src={strTrophy!==null?strTrophy:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Golden_star_2.svg/282px-Golden_star_2.svg.png'} className="image-card" />
           <div className="products-txt">{strCountry}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
