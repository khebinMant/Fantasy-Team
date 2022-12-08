import React, { useEffect } from 'react'
import { openDotaApi } from '../../api/openDotaApi';
import { FantasyLayout } from '../../ui/FantasyLayout'
import { TeamsList } from './components/TeamsList';
import '../../styles/MainPage.css'

export const MainPage = () => {
  
  // useEffect(() => {
  //   getRandomProPlayers()
  // }, []);

  const getRandomProPlayers = async ()=>{
    const {data} = await openDotaApi.get(`https://api.opendota.com/api/proPlayers`)
    console.log(data)
  }

  return (
    <FantasyLayout>
      <div>
        {/* <PlayerCards/> */}
        <TeamsList/>
      </div>
    </FantasyLayout>
  )
}
