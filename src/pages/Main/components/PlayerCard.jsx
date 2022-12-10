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
          <img alt={strPlayer} src={player.strThumb!==null?player.strThumb:'https://hoqueisobregrama.com.br/wp-content/uploads/1991/04/profile_player.png'} className="image-card" />
          <div className="products-txt">{player.strPlayer}</div>
        </div>
        <div className="back">
           <img alt={strPlayer} src={player.strRender!==null?player.strRender:'https://cdn.icon-icons.com/icons2/2070/PNG/512/soccer_player_icon_125840.png'} className="image-card" />
           <div className="products-txt">{player.strTeam}</div>
        </div>
      </div>
    </div>
    }
    </>

  );
};

export default Card;
