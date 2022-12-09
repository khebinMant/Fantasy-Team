import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { getPlayersByTeam } from "../../../helpers/getPlayersByTeam";

import Box from "@mui/material/Box";
import useDrag from "../../../hooks/useDrag";
import Card from "./PlayerCard";

import '../../../styles/MainPage.css'
import { useEffect, useState } from "react";
import { PlayerListSkeleton } from "../../../components/Skeletons/CardListSkeleton";

const teamsIds =[
  138219,138227,138225,138159,   //EC
  140079,136050,134153,134146,134794, //USA  
  133604,133615,133619,133610,133602, 133613, 133612, 133616, 133601, //EN
  133714,133823,133822,133707,133719,133715, //FR
  133664,133650,133653,133814,134690, //GER
  133670,133667,133676,133668,133682, //ITA
  133729,133739,133738,133735,133740,133725,133730,//ESP,
  134296,134286,134291,134287,134284,136186,// BRA
  135156,135160,135164,135165,135171,135179, //AR
  133772,133758,133768,//DT
  134307,133898,133890 //DNS
]

export const PlayerList = () => {

  const { dragStart, dragStop, dragMove, onWheel } = useDrag();
  const [players, setPlayers] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRandomPlayers()
  }, []);

  const handleDrag = ({ scrollContainer }) => (ev) =>
        dragMove(ev, (posDiff) => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
          }
    });


  const getRandomPlayers = async ()=>{
    
    const playersPromises = [];
    const plyrs = []

  
    for(const teamId of teamsIds){
      playersPromises.push( getPlayersByTeam(teamId) )
    }

    const responses =  await Promise.all( playersPromises );

    responses.forEach(element => {
      plyrs.push(element.player[0])
    });

    setPlayers(plyrs)
    setIsLoading(false)
    console.log(plyrs)
  }

  return (
    <Box className="player-list-content">
    {
      isLoading?
      <>
        <p>Estoy cargando</p>
      </>
      :
      <Box style={{marginBottom:'50px'}}>
        <h1>Jugadores</h1>
        <div className="players-gallery">
          <div className="test" onMouseLeave={dragStop}>
            <ScrollMenu
              onWheel={onWheel}
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
            >
              {
                players.map((player,index) => (
                    <Card {...player}  key={index} className="card-container"back="atras">
                    </Card>
                  )
                )
              }
            </ScrollMenu>
          </div>
        </div>
      </Box>
    }
    </Box>
  );
};
