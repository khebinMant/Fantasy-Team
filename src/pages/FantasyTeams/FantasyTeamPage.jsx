import React, { useEffect, useRef, useState } from 'react'
import { FantasyLayout } from '../../ui/FantasyLayout'
import { TabView, TabPanel } from 'primereact/tabview';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import '../../styles/FantasyTeams.css'
import { PlayersFT } from './components/PlayersFT';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { startUpdateFantasyTeam } from '../../store/fantasy/thunks';
import { useForm } from '../../hooks/useFormEdit';
import { Rating } from 'primereact/rating';


export const FantasyTeamPage = () => {

    const { fantasyTeams } = useSelector( state=>state.fantasy )
    const params = useParams()
    const [team, setTeam] = useState(null);
    const [players, setPlayers] = useState([{number:1},{number:2},{number:3},{number:4},{number:5},{number:6},{number:7},{number:8},{number:9},{number:10},]);
    const [selectedCaptain, setSelectedCaptain] = useState()
    const [editTeam, setEditTeam] = useState(false)
    const [cover, setCover] = useState("");
    const [raiting, setRaiting] = useState(null);

    const dispatch = useDispatch()

    const [formValues] = useState({
        newName:'',
        newDescription:'',
    })

    const { newName , newDescription, onInputChange } = useForm(formValues)

    useEffect(() => {
        const item = getItem(params.fantasyTeamId)
        setTeam(item)
    }, [editTeam])
    
    const getItem = (id)=>{
        const team = fantasyTeams.find(team => team.id === id)
        return team
    }

    const handleRemovePlayer = (num)=>{
        console.log(num)
        let newTeam = players.filter(player=> player.number!== num)
        setPlayers(newTeam)
    }

    const onCaptainChange = (e)=>{
        setSelectedCaptain( e.value );
    }

    function handleOnChangeFile(e) {
        const element = e.target;
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
          setCover(reader.result.toString())
        };
        reader.readAsDataURL(file);
    }

    const handleUpdateTeam = ()=>{

        console.log(team)
        const updatedTeam = {
            ...team,
            name:newName,
            rating:raiting,
            description:newDescription,
            captain:selectedCaptain,
            image:cover===""?team.image:cover
        }
        dispatch(startUpdateFantasyTeam(updatedTeam, team.id))
        setEditTeam(false)
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
                        {
                            editTeam?
                            <>
                                <div className='information'>
                                    <h1><InputText name='newName' onChange={onInputChange} value={newName}/></h1>
                                    <Rating value={raiting} onChange={(e) => setRaiting(e.value)} />
                                    <img className='team-image-info' alt={team.name} src={team.image}/>
                                    <input type="file" name="cover" onChange={handleOnChangeFile} />
                                    <div>
                                        {!!cover ? (
                                        <img src={cover} width="200" alt="book-img" />
                                        ) : (
                                        <></>
                                        )}
                                    </div>
                                </div>
                                <p>
                                    <InputTextarea name="newDescription" value={newDescription} onChange={onInputChange} rows={5} cols={20} />
                                </p>
                                <span>
                                    <Dropdown value={selectedCaptain} onChange={onCaptainChange} options={players}  optionLabel="number" placeholder="Selecciona el capitán" />
                                </span>
                                <Button  onClick={handleUpdateTeam} label="Actualizar" className="p-button-outlined p-button-warning" />
                                <Button  onClick={()=>setEditTeam(false)} label="Cancelar"   className="p-button-outlined"/>
                            </>
                            :
                            <>
                                <div className='information'>
                                    <h4> <b>Fecha de creación: </b> {team.creationDate} </h4>
                                    <h1> {team.name}</h1>
                                    <h2> {team.rating}</h2>
                                    <img className='team-image-info' alt={team.name} src={team.image}/>
                                </div>
                                <p><b>Descripción del equipo: </b>{team.description}</p>
                                <span>
                                    <p style={{display:'inline', marginRight:'5px'}} ><b>Capitán:   </b>Fulanito de tal </p>
                                </span>
                                <div className='edit-cancel-buttons'>
                                    <Button  onClick={()=>setEditTeam(true)} label="Editar"   className="p-button-outlined"/>
                                </div>
                            </>
                        }


                    </TabPanel>
                    <TabPanel header="Jugadores">
                        <div  className='player-ft' >
                            <span className='name-player'>Número</span>
                            <span className='name-player'>Nombre</span>
                        </div>
                        {
                            players.map((player, index)=>(
                                <PlayersFT key = {index} numero={player.number} handleRemovePlayer={handleRemovePlayer}/>
                            ))
                        }
                    </TabPanel>
                </TabView>
            </div>
            <div className='arena-side'>
            <TabView>
                    <TabPanel header="Alineación"></TabPanel> 
            </TabView>
            </div>
        </div>
    }
    </FantasyLayout>
  )
}
