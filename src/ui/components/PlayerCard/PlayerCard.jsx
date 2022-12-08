import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Image } from "primereact/image";
import Card from "./Card";
import "./PlayerCard.css";
import { IoIosAddCircle } from "react-icons/io";
import PlayersTable from "../PlayersTable/PlayersTable";
import avatar from "../../../assets/avatar.png";

const PlayerCard = ({ data }) => {
  const [players, setPlayers] = useState("");
  const [team, setTeam] = useState([]);
  const [image, setimage] = useState(avatar);
  const [description, setDescription] = useState("-");

  /* GUARDAR JUGADOR SELECCIONADO EN VARIABLE */
  const handleSelection = (e) => {
    setPlayers(e.value);
    const item = data?.filter((item) => item.personaname === e.value);
    setimage(item.map((item) => item.avatarfull));
    setDescription(item.map((item) => item.team_name));
  };

  /* ANADIR JUGADOR AL EQUIPO */
  const handleTeam = () => {
    if (players) {
      if (team.length < 11) setTeam([...team, players]);
      else alert("Equipo Completo");
    } else alert("seleccione jugador");
  };
  /* Eliminar jugador  */
  const handleDelete = (name) => {
    const newTeam = team.filter((item) => item !== name);
    setTeam(newTeam);
  };

  return (
    <div className={"screenContainer"}>
      <div className="cardContainer">
        <Dropdown
          value={players}
          options={data?.map((item) => item?.personaname)}
          onChange={(e) => handleSelection(e)}
          placeholder="Select a Player"
          className="dropdown"
        />
        {/* <Image src={image} alt="card" /> */}
        <Card title={players} back={description}>
          <img src={image} className="cr7" />
        </Card>
        <IoIosAddCircle size={44} color="white" onClick={handleTeam} />
      </div>

      <PlayersTable data={team} onDelete={handleDelete} />
    </div>
  );
};

export default PlayerCard;
