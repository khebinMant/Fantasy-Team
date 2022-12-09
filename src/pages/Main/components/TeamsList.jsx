import { useEffect } from "react";
import { openFootballApi } from "../../../api/openFootballApi";

export const TeamsList = () => {

  useEffect(() => {
    getRandomTeams()
  }, []);

  const getRandomTeams = async ()=>{
    const {data} = await openFootballApi.get()
    console.log(data)
  }

  return (
    <div>
      TeamsList
    </div>
  )
}
