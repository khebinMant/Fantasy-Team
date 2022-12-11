import React, { useEffect, useState } from "react";
import { FantasyLayout } from "../../ui/FantasyLayout";
import { TabView, TabPanel } from "primereact/tabview";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../../styles/FantasyTeams.css";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import {
  startDeletePlayerFromTeam,
  startUpdateFantasyTeam,
} from "../../store/fantasy/thunks";
import { useForm } from "../../hooks/useFormEdit";
import { Rating } from "primereact/rating";
import cancha from '../../assets/cancha.jpg'


export const FantasyTeamPage = () => {
    
    const params = useParams();
    const dispatch = useDispatch();
    const [team, setTeam] = useState(null);
    const [selectedCaptain, setSelectedCaptain] = useState("");
    const [editTeam, setEditTeam] = useState(false);
    const [cover, setCover] = useState("");
    const [raiting, setRaiting] = useState(null);
    const [formValues] = useState({newName: "",newDescription: "",});
    const { fantasyTeams } = useSelector((state) => state.fantasy);
    const { newName, newDescription, onInputChange } = useForm(formValues);
    const [indexPlayer, setIndexPlayer] = useState()

    const handleRemovePlayer = (playerId) => {
       dispatch(startDeletePlayerFromTeam(playerId, team.id));
    };

    useEffect(() => {
        const item = getItem(params.fantasyTeamId);
        setTeam(item);
    }, [editTeam, handleRemovePlayer]);

    const getItem = (id) => {
        const team = fantasyTeams.find((team) => team.id === id);
        return team;
    };

    const onCaptainChange = (e) => {
        setSelectedCaptain(e.value);
    };

    const handleOnChangeFile = (e) => {
        const element = e.target;
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
        setCover(reader.result.toString());
        };
        reader.readAsDataURL(file);
    }

    const handleUpdateTeam = () => {
      const updatedTeam = {
        ...team,
        name: newName === ""? team.name:newName,
        rating: raiting,
        description: newDescription === ""? team.description: newDescription,
        captain: selectedCaptain.strPlayer ===""? team.selectedCaptain: selectedCaptain.strPlayer,
        image: cover === "" ? team.image : cover,
      };
      dispatch(startUpdateFantasyTeam(updatedTeam, team.id));
      setEditTeam(false);
    };

  return (
    <FantasyLayout>
      {team === null ? (
        <p>cargando</p>
      ) : (
        <div style={{marginTop:'100px'}} className="team-page">
          <div className="edit-side">
            <TabView>
              <TabPanel header="Información">
                {editTeam ? (
                  <>
                    <div className="information">
                      <h1>
                        <InputText
                          name="newName"
                          onChange={onInputChange}
                          value={newName}
                        />
                      </h1>
                      <Rating
                        value={raiting}
                        onChange={(e) => setRaiting(e.value)}
                      />
                      <img
                        className="team-image-info"
                        alt={team.name}
                        src={team.image}
                      />
                      <input
                        type="file"
                        name="cover"
                        onChange={handleOnChangeFile}
                      />
                      <div>
                        {!!cover ? (
                          <img src={cover} width="200" alt="book-img" />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <p>
                      <InputTextarea
                        name="newDescription"
                        value={newDescription}
                        onChange={onInputChange}
                        rows={5}
                        cols={20}
                      />
                    </p>
                    <span>
                      <Dropdown
                        value={selectedCaptain}
                        onChange={onCaptainChange}
                        options={team.players}
                        optionLabel="strPlayer"
                        placeholder="Selecciona el capitán"
                      />
                    </span>
                    <Button
                      onClick={handleUpdateTeam}
                      label="Actualizar"
                      className="p-button-outlined p-button-warning"
                    />
                    <Button
                      onClick={() => setEditTeam(false)}
                      label="Cancelar"
                      className="p-button-outlined"
                    />
                  </>
                ) : (
                  <>
                    <div className="information">
                      <h4>
                        {" "}
                        <b>Fecha de creación: </b> {team.creationDate}{" "}
                      </h4>
                      <h1> {team.name}</h1>
                      <img
                        className="team-image-info"
                        alt=""
                        src={team.image}
                      />
                    </div>
                    <p>
                      <b>Descripción del equipo: </b>
                      {team.description}
                    </p>
                    <span>
                      <p style={{ display: "inline", marginRight: "5px" }}>
                        <b>Capitán: </b>{team.captain}
                        <div>
                          <b> Calificación: </b>{team.rating}
                        </div>
                      </p>
                    </span>
                    <div className="edit-cancel-buttons">
                      <Button
                        onClick={() => setEditTeam(true)}
                        label="Editar"
                        className="p-button-outlined"
                      />
                    </div>
                  </>
                )}
              </TabPanel>
              <TabPanel header="Jugadores">
              <div className='table-content'>
                <table className='firstLine'>
                  <tbody>
                    <tr className="header-table">
                        <th>Imagen</th>
                        <th style={{margin:'auto'}}>Nombre</th>
                        <th style={{margin:'auto'}}>Número</th>
                        <th>Acción</th>
                    </tr>
                    {
                      team.players.map((player, index)=>(
                        <tr key={index}>
                          <td><img  alt={player.idPlayer} className='player-image' src={player.strThumb}/></td>
                          <td style={{margin:'auto'}}>{player.strPlayer}</td>
                          <td>{player.strNumber}</td>
                          <td>
                          <i 
                            onClick={()=>handleRemovePlayer(player.idPlayer)}
                            className="pi pi pi-trash delete-icon"></i>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              </TabPanel>
            </TabView>
          </div>
          <div className="arena-side">
            <TabView>
              <TabPanel header="Alineación" >
                <div className="cancha-container">
                    <img alt="cancha" src={cancha} className="lineup"/>
                    <p style={{position:'absolute', top:'0', left:'0'}}>iosdjaispdj</p>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
      )}
    </FantasyLayout>
  );
};
