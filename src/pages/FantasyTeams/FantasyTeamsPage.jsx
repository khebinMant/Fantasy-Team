import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FantasyLayout } from '../../ui/FantasyLayout';

export const FantasyTeamsPage = () => {
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
    <FantasyLayout>
         {/* <PlayerCard data={result} /> */}
    </FantasyLayout>
  )
}
