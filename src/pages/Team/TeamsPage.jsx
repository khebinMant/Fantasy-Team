import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { FantasyLayout } from '../../ui/FantasyLayout'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getPlayersByTeam } from '../../helpers/getPlayersByTeam'
import { getTeam } from '../../helpers/getTeam'
import { Button } from 'primereact/button';
import '../../styles/LeaguePage.css'

export const TeamPage = () => {

  const [team, setTeam] = useState()
  const [players, setPlayers] = useState()
  const params =  useParams();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPlayersByTeamId();
  }, []);

  const getPlayersByTeamId = async() =>{

    const responsePlayers = await Promise.resolve( getPlayersByTeam(params.teamId) );
    const responseTeam =  await Promise.resolve( getTeam(params.teamId) )

    console.log(responsePlayers.player)
    console.log(responseTeam.teams[0])

    setPlayers(responsePlayers.player)
    setTeam(responseTeam.teams[0])
    setIsLoading(false)
  }

  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.strThumb} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="team-image" />;
  }

  const buttonTemplate = (rowData) =>{
    return <>
      <Button
        onClick={()=>navigate(`/player/${rowData.idPlayer}`)} 
        label="Ver" 
        className="p-button-rounded p-button-info p-button-outlined" 
      />
    </>
  }

  const footer = 
    <>
        {
          isLoading?
          '':
        `Total registros en ${team.strTeam}  : ${players ? players.length : 0} jugadores.`
        }
    </>

  return (
    <FantasyLayout>
    {
        isLoading?
        <p>Estoy cargando</p>
        :
        <div className='league-page'>
          <div className='league-card-container'>
            </div>
            <div className='league-info-container'>
              <div style={{backgroundImage:`url(${team.strStadiumThumb})`,objectFit:'contain'}} className='players-info'>
                  <div className='info-header'>
                      <div className='card-container-page'>
                          <div className="card-page">
                            <div className="front-page">
                              <img alt={team.strTeamBadge} src={team.strTeamBadge} className="image-card-page" />
                              <div className="products-txt-page">{team.strTeam}</div>
                            </div>
                            <div className="back-page">
                              <img alt={team.strTeamJersey} src={team.strTeamJersey!==null?team.strTeamJersey:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Golden_star_2.svg/282px-Golden_star_2.svg.png'} className="image-card-page" />
                              {/* <div className="products-txt-page">{league.strCountry}</div> */}
                            </div>
                          </div>
                      </div>
                        <div className='social-media'>
                          <a href={`https://${team.strTwitter}`} target="_blank" rel="noreferrer">
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"/>
                          </a>
                          <a href={`https://${team.strYoutube}`} target="_blank" rel="noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"/>
                          </a>
                          <a href={`https://${team.strFacebook}`} target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png"/>
                          </a>
                        </div>
                  </div>
                <DataTable value={players} footer={footer} header="Equipos en la liga" responsiveLayout="stack" breakpoint="960px">
                    <Column header="Imagen" body={imageBodyTemplate}/>
                    <Column field="strPlayer" header="Nombre" />
                    <Column field="strBirthLocation" header="Pais" />
                    <Column field="strPosition" header="Posición" />
                    <Column field="strHeight" header="Altura" />
                    <Column field="strWeight" header="Peso" />
                    <Column header="Perfil" body={buttonTemplate}/>
                </DataTable>
              </div>
            </div>
        </div>
      }
    </FantasyLayout>
  )
}
