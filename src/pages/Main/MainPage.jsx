import { useEffect, useState } from "react";
import axios from "axios";
import PlayerCard from "../../ui/components/PlayerCard/PlayerCard";
import { FantasyLayout } from "../../ui/FantasyLayout";
import { TeamsList } from "./components/TeamsList";

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
    <div>
      {/* <PlayerCard data={result} /> */}
      <TeamsList/>
    </div>
    </FantasyLayout>
  );
};
