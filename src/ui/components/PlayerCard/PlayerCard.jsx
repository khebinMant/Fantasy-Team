import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Image } from "primereact/image";
import Card from "./Card";
import "./PlayerCard.css";
import { IoIosAddCircle } from "react-icons/io";
import PlayersTable from "../PlayersTable/PlayersTable";

const PlayerCard = ({ data, names }) => {
  const [players, setPlayers] = useState("");
  const [team, setTeam] = useState([]);
  const [image, setimage] = useState("");
  /* GUARDAR JUGADOR SELECCIONADO EN VARIABLE */
  const handleSelection = (e) => {
    setPlayers(e.value);
    /* const item = data?.filter((item) => item.name === e.value);
    console.log(item);
    setimage(item.map((item) => item.photo)); */
  };
  /* ANADIR JUGADOR AL EQUIPO */
  const handleTeam = () => {
    if (players.name) {
      if (team.length < 11) setTeam([...team, players.name]);
      else alert("Equipo Completo");
    } else alert("seleccione jugador");
  };
  /* Eliminar jugador  */
  const handleDelete = (name) => {
    const newTeam = team.filter((item) => item !== name);
    setTeam(newTeam);
    console.log(newTeam);
  };

  return (
    <div className={"screenContainer"}>
      <div className="cardContainer">
        <Dropdown
          value={players.name}
          options={/* data?.map((item) => item?.name) || */ names}
          onChange={(e) => handleSelection(e)}
          placeholder="Select a Player"
          className="dropdown"
        />
        {/* <Image src={image} alt="card" /> */}
        <Card title={players.name} back={"Descripcion"}>
          <img src={players.img} className="cr7" />
        </Card>
        <IoIosAddCircle size={44} color="white" onClick={handleTeam} />
      </div>

      <PlayersTable data={team} onDelete={handleDelete} />
    </div>
  );
};

export default PlayerCard;
