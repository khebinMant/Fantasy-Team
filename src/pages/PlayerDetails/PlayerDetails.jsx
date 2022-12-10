import "./PlayerDetails.css";
import Card from "../Main/components/PlayerCard";
import { FantasyLayout } from "../../ui/FantasyLayout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { FcLock, FcUnlock } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

const PlayerDetails = () => {
  const location = useLocation();
  const { idPlayer } = location.state;
  const [lock, setlock] = useState(true);
  const [porcentage, setPorcentage] = useState();
  const [fantasySelected, setFantasySelected] = useState();
  const { fantasyTeams } = useSelector((state) => state.fantasy);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(
      "params",
      fantasyTeams.map((item) => item.name)
    );
    setPorcentage(location?.state?.strHeight.slice(0, 4) * 50);
  }, []);

  const statsStyle = {
    width: `${porcentage}%`,
  };

  /* DATA PARA EL DROPDOWN */
  const citySelectItems = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
  ];

  /* LOCK DROPDOWN COMPONENT */
  const handleLock = () => {
    setlock(!lock);
  };

  return (
    <FantasyLayout>
      <div className="playerDetailsContainer">
        <Card idPlayer={idPlayer} />

        <div className="detatailBox">
          <div>
            <h4>Name: </h4>
            <div>{location?.state?.strPlayer}</div>
            <h4>Nacionalidad:</h4>
            <div>{location?.state?.strNationality}</div>
            <h4>Posicion:</h4>
            <div>{location?.state?.strPosition}</div>
          </div>
          <div>
            <div className="skills-bar">
              <div className="bar">
                <div className="info">
                  <span>Statura</span>
                  <div>{location?.state?.strHeight}</div>
                </div>
                <div className="progress-line height">
                  <span style={statsStyle}></span>
                </div>
              </div>

              <div className="bar">
                <div className="info">
                  <span>Descripcion:</span>
                  <div className="descriptionText">
                    {location?.state?.strDescriptionEN}
                  </div>
                </div>
              </div>

              <div className="bar">
                <div className="info">
                  <span>Equipo Fantasia:</span>
                  <div className="dropDownRowContainer">
                    <Dropdown
                      value={fantasySelected}
                      options={fantasyTeams.map((item) => item.name)}
                      onChange={(e) => setFantasySelected(e.value)}
                      placeholder={location?.state?.strTeam}
                      className={lock ? "dropDownLock" : "dropDownUnlock"}
                    />
                    {lock ? (
                      <FcLock size={34} color="black" onClick={handleLock} />
                    ) : (
                      <FcUnlock size={34} color="black" onClick={handleLock} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FantasyLayout>
  );
};

export default PlayerDetails;
