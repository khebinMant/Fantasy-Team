import { useEffect, useState } from "react";
import { getTeam } from "../../../helpers/getTeam";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/material";

import useDrag from "../../../hooks/useDrag";
import Card from "./TeamCard";
import { CardListSkeleton } from "../../../components/Skeletons/CardListSkeleton";

const teamsIds =[
  133604,133615,133619,133610,133602, 133613, 133612, 133616, 133601, //EN
  133729,133739,133738,133735,133740,133725,133730,//ESP,
  133714,133823,133822,133707,133719,133715, //FR
  133670,133667,133676,133668,133682, //ITA
  133664,133650,133653,133814,134690, //GER
  135156,135160,135164,135165,135171,135179, //AR
  140079,136050,134153,134146,134794, //USA  
  134296,134286,134291,134287,134284,136186,// BRA
  133772,133758,133768,//DT
  134307,133898,133890, //DNS
  138219,138227,138225,138159,   //EC
]


export const TeamsList = () => {

  const { dragStop, LeftArrow, RightArrow } = useDrag();
  const [teams, setTeams] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRandomTeams()
  }, []);

  const getRandomTeams = async ()=>{
    
    const teamsPromises = [];

  
    for(const teamId of teamsIds){
      teamsPromises.push( getTeam(teamId) )
    }
    const responses =  await Promise.all( teamsPromises );
    setTeams(responses)
    setIsLoading(false)
  }

  return (
    <Box className="player-list-content">
    {
      isLoading?
        <Box style={{ marginBottom: "50px" }}>
          <h1>Equipos</h1>
          <hr/>
          <CardListSkeleton></CardListSkeleton>
        </Box>
      :
      <Box style={{marginBottom:'50px'}}>
        <h1>Equipos</h1>
        <hr/>
        <div className="players-gallery">
          <div onMouseLeave={dragStop}>
            <ScrollMenu
              // onWheel={onWheel}
              // onMouseDown={() => dragStart}
              // onMouseUp={() => dragStop}
              // onMouseMove={handleDrag}
              RightArrow={RightArrow}
              LeftArrow={LeftArrow}
            >
              {
                teams.map(({teams},index) => (
                <Card {...teams[0]}  key={index} className="card-container" title={teams[0].strAlternate} back="atras">
                  <img alt="porelmomento" src={teams[0].strTeamBadge} className="image-card" />
                </Card>
                ))
              }
            </ScrollMenu>
          </div>
        </div>
      </Box>
    }

    </Box>
  )
}
