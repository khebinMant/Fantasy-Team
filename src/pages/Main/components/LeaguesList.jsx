import { useEffect, useState } from "react";
import { getLeague } from "../../../helpers/getLeague";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/material";

import useDrag from "../../../hooks/useDrag";
import Card from "./LeagueCard";

const leaguesIds =[4328,4331,4335,4332,4686,5201,4334,4346,4340,4351,4521,4406,4337]

export const LeaguesList = () => {

  const { dragStart, dragStop, dragMove, onWheel } = useDrag();
  const [leagues, setLeagues] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getRandomLeagues()
  }, []);

  const handleDrag = ({ scrollContainer }) => (ev) =>
        dragMove(ev, (posDiff) => {
          if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += posDiff;
          }
    });


  const getRandomLeagues = async ()=>{
    
    const leaguesPromises = [];

  
    for(const leagueId of leaguesIds){
      leaguesPromises.push( getLeague(leagueId) )
    }
    const responses =  await Promise.all( leaguesPromises );
    setLeagues(responses)
    setIsLoading(false)
    console.log(responses)

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
        <h1>Ligas del mundo</h1>
        <div className="players-gallery">
          <div className="test" onMouseLeave={dragStop}>
            <ScrollMenu
              onWheel={onWheel}
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
            >
              {
                leagues.map(({leagues},index) => (
                <Card {...leagues[0]}  key={index} className="card-container" title={leagues[0].strLeague} back="atras">
                  <img alt="porelmomento" src={leagues[0].strBadge} className="image-card" />
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
