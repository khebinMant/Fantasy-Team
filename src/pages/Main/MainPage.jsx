import { useEffect, useState } from "react";
import axios from "axios";
import PlayerCard from "../../ui/components/PlayerCard/PlayerCard";
import { FantasyLayout } from "../../ui/FantasyLayout";
import { TeamsList } from "./components/TeamsList";
import { PlayerList } from "./components/PlayerList";
import { LeaguesList } from "./components/LeaguesList";
import '../../styles/MainPage.css'


export const MainPage = () => {
  const [players, setplayers] = useState();
  const [result, setResult] = useState();

  // const options = {
  //   method: "GET",
  //   url: "https://api.opendota.com/api/proPlayers",
  // };
  // const currentPage = "https://api.opendota.com/api/proPlayers";

  // useEffect(() => {
  //   try {
  //     axios.get(currentPage).then((response) => {
  //       setResult(response.data);
  //       console.log(response.data);
  //     });
  //   } catch (e) {
  //     alert(e.message);
  //     return;
  //   }
  // }, []);

  return (
    <FantasyLayout>
      <div className="main-content">
        {/* <PlayerCard data={result} /> */}
        <LeaguesList/>
        <PlayerList/>
        <TeamsList/>
      </div>
    </FantasyLayout>
  );
};
