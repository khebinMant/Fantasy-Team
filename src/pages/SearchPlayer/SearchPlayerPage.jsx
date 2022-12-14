import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { FantasyLayout } from '../../ui/FantasyLayout';
// import { FantasyTeamCard } from './FantasyTeamCard';
// import { AddFantasyTeam } from './components/AddFantasyTeam';
// import { SearchPlayerCard } from './SearchPlayerCard';
import { useEffect, useState } from 'react';
import '../../styles/FantasyTeams.css'
import { getPlayerByName } from '../../helpers/getPlayerByName';
import { SearchPlayerCard } from './SearchPlayerCard';
import { CheckingAuth } from '../../components/CheckingAuth';

export const SearchPlayerPage = () => {

  const [players, setPlayers] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { searchedPlayer } = useSelector( state => state.fantasy )

  useEffect(() => {
    getPlayerResults()
  }, [searchedPlayer])
  
  const getPlayerResults = async()=>{
    
    if(searchedPlayer!==""){
        const responses = await Promise.resolve( getPlayerByName(searchedPlayer) )

        const filtered = responses.player.filter(player=>player.strSport==='Soccer')

        setPlayers(filtered)
        setIsLoading(false)
    }
  }

  return (
  <FantasyLayout>
    {
      searchedPlayer!=null && players ?
      <div className='ft-container'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2,  sm:3, md: 2 }} columns={{ xs: 4, sm: 8, md: 10 }}>
              {
                players.map((player, index)=>(
                  <SearchPlayerCard key={index} player={player}/>
                ))
              }
              </Grid>
            </Box>
      </div>
      :
      <CheckingAuth/>
    }
  </FantasyLayout>
  )
}
