import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { FantasyLayout } from '../../ui/FantasyLayout';
import '../../styles/FantasyTeams.css'
import { FantasyTeamCard } from './FantasyTeamCard';



export const FantasyTeamsPage = () => {

  const {fantasyTeams} = useSelector(state => state.fantasy)

  return (
  <FantasyLayout>
    <div className='ft-container'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2,  sm:3, md: 2 }} columns={{ xs: 4, sm: 8, md: 10 }}>
            {
              fantasyTeams.map((team, index)=>(
                <FantasyTeamCard key={index} team={team}/>
              ))
            }
            </Grid>
          </Box>
    </div>
  </FantasyLayout>
  )
}
