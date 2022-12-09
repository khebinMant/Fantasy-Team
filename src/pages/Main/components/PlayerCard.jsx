import { useEffect, useState } from "react";
import { getPlayer } from "../../../helpers/getPlayer";

const Card = ({ strPlayer,strTeam,idPlayer }) => {

  const [player, setPlayer] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPlayerById()
  }, []);

  const getPlayerById = async()=>{
    const response =  await Promise.resolve( getPlayer(idPlayer) );
    setPlayer(response.players[0])
    setIsLoading(false)
  }

  return (
    <>
    {
      isLoading?
      <></>
      :

    <div className="card-container">
      <div className="card">
        <div className="front">
          <img alt="porelmomento" src={player.strThumb!==''?player.strThumb:''} className="image-card" />
          <div className="products-txt">{player.strPlayer}</div>
        </div>
        <div className="back">
           <img alt="porelmomento" src={player.strRender!==null?player.strRender:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Golden_star_2.svg/282px-Golden_star_2.svg.png'} className="image-card" />
           <div className="products-txt">{player.strTeam}</div>
        </div>
      </div>
    </div>
    }
    </>

  );
};

export default Card;
