import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { getPlayersByTeam } from "../../../helpers/getPlayersByTeam";

import Box from "@mui/material/Box";
import useDrag from "../../../hooks/useDrag";
import Card from "./PlayerCard";
import "../../../styles/PlayerList.css";
import "../../../styles/MainPage.css";
import { useEffect, useState } from "react";
import { CardListSkeleton, PlayerListSkeleton } from "../../../components/Skeletons/CardListSkeleton";
import { NavLink } from "react-router-dom";
import { Skeleton } from "@mui/material";

const teamsIds = [
  133738,
  133714,
  138219,
  136050,
  133604,
  133610,
  133619,
  133613,
  133612,
  133664,
  133670,
  133667,
  133676,
  133729,
  133739,
  134296,
  134286,
  134291,
  134287,
  134284,
  136186, // BRA
  135156,
  135160,
  135164,
  135165,
  135171,
  135179, //AR
  133772,
  133758,
  133768, //DT
  134307,
  133898,
  133890, //DNS
];

export const PlayerList = () => {
  const { dragStart, dragStop, dragMove, onWheel, RightArrow, LeftArrow } = useDrag();
  const [players, setPlayers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomPlayers();
  }, []);

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const getRandomPlayers = async () => {
    const playersPromises = [];
    const plyrs = [];

    for (const teamId of teamsIds) {
      playersPromises.push(getPlayersByTeam(teamId));
    }

    const responses = await Promise.all(playersPromises);

    
    responses.forEach((element) => {
      element.player.forEach(p => {
        plyrs.push(p);
      });
    });

    setPlayers(plyrs);
    setIsLoading(false);
    console.log(plyrs);
  };

  return (
    <Box className="player-list-content">
      {isLoading ? (
        <Box style={{ marginBottom: "50px" }}>
          <h1>Jugadores</h1>
          <hr/>
          <div className="players-gallery">
            <div className="test" onMouseLeave={dragStop}>
              <CardListSkeleton></CardListSkeleton>
            </div>
          </div>
        </Box>
      ) : (
        <Box style={{ marginBottom: "50px" }}>
          <h1>Jugadores</h1>
          <hr/>
          <div className="players-gallery">
            <div className="test" onMouseLeave={dragStop}>
              <ScrollMenu
                // onWheel={onWheel}
                // onMouseDown={() => dragStart}
                // onMouseUp={() => dragStop}
                // onMouseMove={handleDrag}
                RightArrow={RightArrow}
                LeftArrow={LeftArrow}
              >
                {players.map((player, index) => (
                  <NavLink className='avoid-link' to="/player-details" state={player}>
                    <Card
                      {...player}
                      key={index}
                      className="card-container"
                      back="atras"
                    />
                  </NavLink>
                ))}
              </ScrollMenu>
            </div>
          </div>
        </Box>
      )}
    </Box>
  );
};
