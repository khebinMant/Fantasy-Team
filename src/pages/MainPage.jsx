import React, { useEffect } from 'react'
import { openDotaApi } from '../api/openDotaApi';
import { FantasyLayout } from '../ui/FantasyLayout'

export const MainPage = () => {
  
  useEffect(() => {
    getRandomProPlayers()
  }, []);

  const getRandomProPlayers = async ()=>{
    const {data} = await openDotaApi.get(`https://api.opendota.com/api/proPlayers`)
    console.log(data)
  }

  return (
    <FantasyLayout>
      <div></div>
    </FantasyLayout>
  )
}
