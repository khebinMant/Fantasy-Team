import { useEffect, useState } from "react";
import axios from "axios";
import PlayerCard from "../ui/components/PlayerCard/PlayerCard";

export const MainPage = () => {
  const [players, setplayers] = useState();
  const [result, setResult] = useState();

  const options = {
    method: "GET",
    url: "https://api.opendota.com/api/proPlayers",
  };
  const currentPage = "https://api.opendota.com/api/proPlayers";

  useEffect(() => {
    try {
      axios.get(currentPage).then((response) => {
        setResult(response.data);
        console.log(response.data);
      });
    } catch (e) {
      alert(e.message);
      return;
    }
  }, []);

  return (
    <div>
      <PlayerCard data={result} />
    </div>
  );
};
