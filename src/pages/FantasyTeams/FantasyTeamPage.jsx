import React, { useEffect, useState } from 'react'
import { FantasyLayout } from '../../ui/FantasyLayout'
import { TabView, TabPanel } from 'primereact/tabview';
import '../../styles/FantasyTeams.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const FantasyTeamPage = () => {

    const { fantasyTeams } = useSelector( state=>state.fantasy )
    const params = useParams()
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const item = getItem(params.fantasyTeamId)
        setTeam(item)
    }, [])
    
    const getItem = (id)=>{
        const team = fantasyTeams.find(team => team.id === id)
        return team
    }

  return (
    <FantasyLayout>
    {
        team === null?
        <p>
            cargando
        </p>
        :
        <div className='team-page'>
            <div className='edit-side'>
                <TabView>
                    <TabPanel header="Información">
                        <div className='information'>
                            <h1> {team.name}</h1>
                            <h2> {team.rating} asdasd</h2>
                            <img className='team-image-info' alt={team.name} src={team.image}/>
                        </div>
                        <h4> {team.creationDate} </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </TabPanel>
                    <TabPanel header="Jugadores">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </TabPanel>
                </TabView>
            </div>
            <div className='arena-side'>

            </div>
        </div>
    }
    </FantasyLayout>
  )
}
