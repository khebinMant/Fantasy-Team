import "./PlayerDetails.css";
import Card from "../Main/components/PlayerCard";
import { FantasyLayout } from "../../ui/FantasyLayout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";

const PlayerDetails = () => {
  const location = useLocation();
  const { idPlayer } = location.state;
  const [fantasySelected, setFantasySelected] = useState();
  useEffect(() => {
    console.log("params", location.state);
  }, []);

  const citySelectItems = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
  ];

  return (
    <FantasyLayout>
      <div className="playerDetailsContainer">
        <Card idPlayer={idPlayer} />
        {/*      <img src={require("../../assets/ball.png")} className="ball" /> */}
        <div className="detatailBox">
          <div>
            <h4>Name: </h4>
            <div>{location?.state?.strPlayer}</div>
            <h4>Nacionalidad:</h4>
            <div>{location?.state?.strNationality}</div>
            <h4>Posicion:</h4>
            <div>{location?.state?.strPosition}</div>
          </div>

          <Dropdown
            value={fantasySelected}
            options={citySelectItems}
            onChange={(e) => setFantasySelected(e.value)}
            placeholder="Add to FantasyTeam"
            className="dropDown"
          />
        </div>
      </div>
    </FantasyLayout>
  );
};

export default PlayerDetails;
