import { useEffect, useState } from "react";
import axios from "axios";

import PlayerCard from "../ui/components/PlayerCard/PlayerCard";
import im1 from "../assets/messi.png";
import im2 from "../assets/cr7.png";
import im3 from "../assets/mbappe.png";
import im4 from "../assets/valencia.png";
import im5 from "../assets/neymar.png";

export const MainPage = () => {
  const [players, setplayers] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    loadInfo();
  }, []);

  const names = [
    {
      label: "Ronaldo",
      value: { name: "Ronaldo", apellido: "cris", img: im2 },
    },
    {
      label: "Messi",
      value: { name: "Messi", apellido: "cris", img: im1 },
    },
    {
      label: "Mbape",
      value: { name: "Mbape", apellido: "cris", img: im3 },
    },
    {
      label: "Valencia",
      value: { name: "Valencia", apellido: "cris", img: im4 },
    },
    {
      label: "Neymar",
      value: { name: "Neymar", apellido: "cris", img: im5 },
    },
  ];
  /*//////////////////// API FETCHING */
  const loadInfo = async () => {
    try {
      const request = await fetch(
        "https://v3.football.api-sports.io/players?league=2&season=2021&team=33&page=2",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "26610e77d6c79be6af9fdf8a495431c5",
          },
        }
      );

      const json = await request.json();
      console.log(json);
      setplayers(json.response.map((item) => item.player.name));
      setResult(json.response.map((item) => item.player));
    } catch (e) {
      console.log(e.message);
    }
  };

  return <PlayerCard data={result} names={names} />;
};
