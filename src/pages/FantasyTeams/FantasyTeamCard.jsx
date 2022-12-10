import { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { prominent } from 'color.js'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import notCover from '../../assets/no_cover_available.png'


export const FantasyTeamCard = ({team}) => {

  const navigation = useNavigate()
  const [color, setColor] = useState("")
  const [hasCover, setHasCover] = useState(false)

  useEffect(() => {
    getColor()
  }, [])
  
  const getColor = async() =>{
    if(team.image!==""){
      const color = await prominent(team.image, { amount: 1 })
      setColor(`RGB(${color.toString()})`)
      setHasCover(true)
    }
    else{
      setHasCover(false)
    }
  }

  const handleNavigate = () =>{
      navigation(`/fantasy-team/${team.id}`)
  }
  
  const header = (
    <img className='image-cover' alt="cover" src={hasCover?team.image:notCover} />
  );

  return (
    <Box >
        <Grid 
          xs={2} sm={4} md={2}
          onClick={handleNavigate}
          style={{gap:'15px'}}
        >
            <Card
              className='card-book animate__animated animate__bounceIn'
              title={team.name} 
              subTitle={team.captain}
              style={{ backgroundColor:color}}  
              header={header}
            >
            </Card>
      </Grid>
    </Box>
  )
}
