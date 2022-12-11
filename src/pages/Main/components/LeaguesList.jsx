import { useEffect, useState } from "react";
import { getLeague } from "../../../helpers/getLeague";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/material";

import useDrag from "../../../hooks/useDrag";
import Card from "./LeagueCard";
import { CardListSkeleton } from "../../../components/Skeletons/CardListSkeleton";

const leaguesIds = [
  4328, 4335, 4331, 4332, 4334, 4686, 5201,  4346, 4340, 4351, 4521, 4406, 4337,
];

export const LeaguesList = () => {
  const { dragStop, RightArrow, LeftArrow } = useDrag();
  const [leagues, setLeagues] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomLeagues();
  }, []);

  const getRandomLeagues = async () => {
    const leaguesPromises = [];

    for (const leagueId of leaguesIds) {
      leaguesPromises.push(getLeague(leagueId));
    }
    const responses = await Promise.all(leaguesPromises);
    setLeagues(responses);
    setIsLoading(false);
  };

  return (
    <Box className="player-list-content">
      {isLoading ?  
        <Box style={{ marginBottom: "50px" }}>
          <h1>Ligas</h1>
          <hr/>
          <CardListSkeleton></CardListSkeleton>
        </Box>
      : (
        <Box style={{ marginBottom: "50px" }}>
          <h1>Ligas</h1>
          <hr />
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
                {leagues.map(({ leagues }, index) => (
                  <Card
                    {...leagues[0]}
                    key={index}
                    className="card-container"
                    back="atras"
                  >
                    <img
                      alt="porelmomento"
                      src={leagues[0].strBadge}
                      className="image-card"
                    />
                  </Card>
                ))}
              </ScrollMenu>
            </div>
          </div>
        </Box>
      )}
    </Box>
  );
};
