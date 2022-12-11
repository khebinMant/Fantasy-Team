import { FantasyLayout } from "../../ui/FantasyLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { startSavePlayerToTeam } from "../../store/fantasy/thunks";
import { getPlayer } from "../../helpers/getPlayer";
import { CheckingAuth } from "../../components/CheckingAuth";
import CardP from "./PlayerCard";
import "./PlayerDetails.css";

const PlayerPage = () => {

  const [porcentage, setPorcentage] = useState();
  const [fantasySelected, setFantasySelected] = useState();
  const state = useSelector((state) => state.fantasy);
  const dispatch = useDispatch();
  const [player, setPlayer] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const params =  useParams();

  
  useEffect(() => {
    getPlayerById()
  }, []);

  const getPlayerById = async()=>{
    const response =  await Promise.resolve( getPlayer( params.playerId ) );
    console.log(response)
    setPlayer(response.players[0])
    if(player){

      setPorcentage(player.strHeight.slice(0, 4) * 50)
    }
    setIsLoading(false)
  }


  const statsStyle = {
    width: `${porcentage}%`,
  };


  const savePlayerOnFt = () => {
    dispatch(startSavePlayerToTeam(player, fantasySelected.id))
  };

  return (
    <FantasyLayout>
      <>
        {
          isLoading?
          <CheckingAuth/>
          :
          <div className="player-page">
          <div className="playerDetailsContainer">
              <div>
                <CardP {...player} />
              </div>
            <div className="detatailBox">
              <div>
                <h4>Name: </h4>
                <div>{player.strPlayer}</div>
                <h4>Nacionalidad:</h4>
                <div>{player.strBirthLocation}</div>
                <h4>Posicion:</h4>
                <div>{player.strPosition}</div>
              </div>
              <div>
                <div className="skills-bar">
                  <div className="bar">
                    <div className="info">
                      <span>Statura</span>
                      <div>{player.strHeight}</div>
                    </div>
                    <div className="progress-line height">
                      <span style={statsStyle}></span>
                    </div>
                  </div>

                  <div className="bar">
                    <div className="info">
                      <span>Descripcion:</span>
                      <div className="descriptionText">
                        {player.strDescriptionEN}
                      </div>
                    </div>
                  </div>
                  <span>Equipo Fantasia:</span>
                  <div className="dropDownRowContainer">
                    <Dropdown
                      value={fantasySelected}
                      options={state.fantasyTeams}
                      onChange={(e) => setFantasySelected(e.value)}
                      optionLabel="name" 
                    />
                </div>
                  <button  onClick={savePlayerOnFt}>Guardar</button>
              </div>
            </div>
            </div>
            </div>
          </div>
        }
      </>

    </FantasyLayout>
  );
};

export default PlayerPage;
