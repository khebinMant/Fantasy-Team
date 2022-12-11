import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { FantasyLayout } from '../../ui/FantasyLayout';
// import { FantasyTeamCard } from './FantasyTeamCard';
// import { AddFantasyTeam } from './components/AddFantasyTeam';
// import { SearchPlayerCard } from './SearchPlayerCard';
import { useEffect, useState } from 'react';
import '../../styles/FantasyTeams.css'
import { getPlayerByName } from '../../helpers/getPlayerByName';
import { SearchPlayerCard, SearchTeamCard } from './SearchTeamCard';
import { getTeamByName } from '../../helpers/getTeamByName';
import { CheckingAuth } from '../../components/CheckingAuth';

export const SearchTeamPage = () => {

  const [teams, setTeams] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { searchedTeam } = useSelector( state => state.fantasy )

  useEffect(() => {
    getTeamsResults()
  }, [searchedTeam])
  
  const getTeamsResults = async()=>{
   
    if(searchedTeam!==""){

        const responses = await Promise.resolve( getTeamByName(searchedTeam) )

        const filtered = responses.teams.filter(team=>team.strSport==='Soccer')

        setTeams(filtered)
        setIsLoading(false)
    }
  }

  return (
  <FantasyLayout>
    {
      searchedTeam!=null && teams ?
      <div className='ft-container'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2,  sm:3, md: 2 }} columns={{ xs: 4, sm: 8, md: 10 }}>
              {
                teams.map((team, index)=>(
                  <SearchTeamCard key={index} team={team}/>
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
