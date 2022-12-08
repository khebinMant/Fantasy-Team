import { Button, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { openDotaApi } from "../../../api/openDotaApi";
// import SendIcon from '@mui/icons-material/Send';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import useDrag from "../../../hooks/useDrag";
import Box from '@mui/material/Box';

export const TeamsList = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [teams, setTeams] = useState()

  useEffect(() => {
    getRandomTeams()
  }, []);

  const getRandomTeams = async ()=>{
    const {data} = await openDotaApi.get(`/CL`)

    // const filters  = data.filter(team =>{
    //   const total = (team.wins*100)/(team.wins + team.losses)
    //   console.log(total)
    //   if(total>=70 && team.last_match_time> 1600000000)  return team
    // }
    // )
    // setTeams(filters)
    // setIsLoading(false)
    console.log(data)
  }
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag = ({ scrollContainer }) => (ev) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  const [selected, setSelected] = useState("");

  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
  
    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }

  return (
    <div>
    {/* {
      isLoading ? 
      <p>Estoy cargando</p>
      :
      <Box style={{paddingLeft:"-100px"}}>          
          <div className="pokemon-gallery" style={{ paddingTop: "-30px"}}>
              <div onMouseLeave={dragStop} >
              <ScrollMenu
                  onWheel={onWheel}
                  onMouseDown={() => dragStart}
                  onMouseUp={() => dragStop}
                  onMouseMove={handleDrag}
              >
                  {
                    teams.map(({ name, id, Image, description,color,logo_url }) => 
                  (
                      <div key={id}>
                        <Card
                          style={{
                              display: "inline-block",
                              margin: "10px 20px",
                              height: "300 px",
                              userSelect: "none"
                            }}
                          // className={checkPokemonColor(color || '')}
                          elevation={10}
                          sx={{width: 300, height:500, borderRadius: 5, pointer:'cursor'}}>
                          <Typography 
                                gutterBottom variant="h5" 
                                component="div"
                                style={{
                                  textAlign : "center",
                                  marginTop : "15px",
                                  marginBottom : "10"
                                }}
                              >
                                {name.toUpperCase()}
                          </Typography>
                          <CardMedia
                            className='img-fix'
                            component="img"
                            height="240"
                            src={logo_url}
                            alt="Paella dish"
                            style={{
                              right:'100px'
                            }}
                          />
                          <CardContent>
                              <Typography 
                                gutterBottom 
                                variant="body2" 
                                component="div"
                                style={{
                                  textAlign : "center",
                                  marginTop : "-15px",
                                }}
                              >
                                {description}
                              </Typography>
                          </CardContent>
                          <CardActions
                            style={{
                              alignItems:'center',
                              justifyContent:'center'
                            }}
                          >
                            <Button 
                              // onClick={()=>handleOpen(id!)}
                              color="success" 
                              variant="contained" 
                              // startIcon={<SendIcon />}
                              >
                              Mas Detalles
                            </Button>                          
                          </CardActions>
                          </Card>
                      </div>
                  ))
                  }
              </ScrollMenu>
              </div>
          </div>
       </Box>

    } */}
    </div>
  )
}
