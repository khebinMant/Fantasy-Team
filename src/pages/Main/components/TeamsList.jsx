import { useEffect } from "react";
import { openDotaApi } from "../../../api/openDotaApi";

export const TeamsList = () => {

  useEffect(() => {
    getRandomTeams()
  }, []);

  const getRandomTeams = async ()=>{
    const {data} = await openDotaApi.get(`https://api.opendota.com/api/proPlayers`)
    console.log(data)
  }

  return (
    <div>Teams</div>
  )
}
