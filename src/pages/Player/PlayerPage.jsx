import { FantasyLayout } from "../../ui/FantasyLayout";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { startSavePlayerToTeam } from "../../store/fantasy/thunks";
import { getPlayer } from "../../helpers/getPlayer";
import { CheckingAuth } from "../../components/CheckingAuth";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import CardP from "./PlayerCard";
import "./PlayerDetails.css";

const PlayerPage = () => {
  const [porcentage, setPorcentage] = useState();
  const [fantasySelected, setFantasySelected] = useState();
  const { fantasyTeams } = useSelector((state) => state.fantasy);
  const dispatch = useDispatch();
  const [player, setPlayer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [hasFt, setHasFt] = useState(false);
  const [fantasyTeam, setFantasyTeam] = useState();
  const toast = useRef(null);

  useEffect(() => {
    getPlayerById();
  }, []);

  useEffect(() => {
    setConfig();
  }, [player, hasFt]);

  const setConfig = () => {
    if (player) {
      setPorcentage(player.strHeight.slice(0, 4) * 50);

      fantasyTeams.forEach((ft) => {
        ft.players.forEach((pl) => {
          if (pl.idPlayer === player.idPlayer) {
            setFantasyTeam(ft);
            setHasFt(true);
          }
        });
      });
    }
  };

  const getPlayerById = async () => {
    const response = await Promise.resolve(getPlayer(params.playerId));
    setPlayer(response.players[0]);
    setIsLoading(false);
  };

  const statsStyle = {
    width: `${porcentage}%`,
  };

  const savePlayerOnFt = () => {
    dispatch(startSavePlayerToTeam(player, fantasySelected.id));
    setHasFt(true);
    toast.current.show({
      severity: "success",
      summary: "¡Agregado!",
      detail: `${player.strPlayer} ha sido agregado al equipo ${fantasySelected.name}`,
      life: 3000,
    });
  };

  return (
    <FantasyLayout>
      <Toast ref={toast} />
      <>
        {isLoading ? (
          <CheckingAuth />
        ) : (
          <div className="player-page animate__animated animate__fadeIn">
            <div className="playerDetailsContainer">
              <div>
                <CardP {...player} />
              </div>
              <div className="detatailBox">
                <div className="leftInfo">
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
                    <span>
                      <b>Equipo de Fantasia </b>
                    </span>
                    {hasFt && fantasyTeam ? (
                      <Link to={`/fantasy-team/${fantasyTeam.id}`}>
                        {fantasyTeam.name}
                      </Link>
                    ) : (
                      <>
                        <div className="dropDownRowContainer">
                          <Dropdown
                            value={fantasySelected}
                            options={fantasyTeams}
                            onChange={(e) => setFantasySelected(e.value)}
                            optionLabel="name"
                          />
                          <Button
                            onClick={savePlayerOnFt}
                            label="Guardar"
                            className="p-button-success"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </FantasyLayout>
  );
};

export default PlayerPage;
