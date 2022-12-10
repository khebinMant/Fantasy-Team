import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { getLeague } from '../../helpers/getLeague'
import { getTeamsByLeague } from '../../helpers/getTeamsByLeague'
import { FantasyLayout } from '../../ui/FantasyLayout'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../../styles/LeaguePage.css'

export const LeaguePage = () => {

  const [league, setLeague] = useState()
  const [teams, setTeams] = useState()
  const location = useLocation()
  const params =  useParams();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getTeamsByLeagueId();
  }, []);

  const getTeamsByLeagueId = async() =>{
    const responseTeams =  await Promise.resolve( getTeamsByLeague(params.leagueId) );
    const responseLeague =  await Promise.resolve( getLeague(params.leagueId) );

    console.log(responseTeams.teams)
    console.log(responseLeague.leagues[0])

    setTeams(responseTeams.teams)
    setLeague(responseLeague.leagues[0])
    setIsLoading(false)
  }

  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.strTeamBadge} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="team-image" />;
  }

  const footer = 
    <>
        {
        `En total en la Liga juegan ${teams ? teams.length : 0} equipos.`
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
              <div  style={{backgroundImage:`url(${league.strPoster})`,objectFit:'contain'}} className='team-info'>
                  <div className='info-header'>
                      <div className='card-container-page'>
                          <div className="card-page">
                            <div className="front-page">
                              <img alt={league.strBadge} src={league.strBadge} className="image-card-page" />
                              <div className="products-txt-page">{league.strLeague}</div>
                            </div>
                            <div className="back-page">
                              <img alt={league.strTrophy} src={league.strTrophy!==null?league.strTrophy:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Golden_star_2.svg/282px-Golden_star_2.svg.png'} className="image-card-page" />
                              <div className="products-txt-page">{league.strCountry}</div>
                            </div>
                          </div>
                      </div>
                        <div className='league-decription'>
                          <h1>{league.strLeague}</h1>
                          <h2>{league.strLeagueAlternate}</h2>
                        </div>
                        <div className='social-media'>
                          <a href={`https://${league.strTwitter}`} target="_blank" rel="noreferrer">
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"/>
                          </a>
                          <a href={`https://${league.strYoutube}`} target="_blank" rel="noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"/>
                          </a>
                          <a href={`https://${league.strFacebook}`} target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png"/>
                          </a>
                        </div>
                  </div>
                <DataTable value={teams} footer={footer} header="Equipos en la liga" responsiveLayout="stack" breakpoint="960px">
                    <Column header="Imagen" body={imageBodyTemplate}/>
                    <Column field="strTeam" header="Nombre" />
                    <Column field="strStadium" header="Estadio" />
                    <Column field="intFormedYear" header="Año creación" />
                    <Column field="strWebsite" header="SitioWeb" />
                </DataTable>
              </div>
            </div>
        </div>
      }
       
    </FantasyLayout>
  )
}
