import React from "react";
import "./PlayersTable.css";
import { BsCheckCircleFill } from "react-icons/bs";
const PlayersTable = ({ data, onDelete }) => {
  return (
    <div className="tableContainer">
      <h4>Mi equipo :{data.length}/11</h4>
      {data.map((item) => (
        <div className="player-row">
          <img src={require("../../../assets/shirtA.png")} className="shirt" />
          <div>{item}</div>
          <BsCheckCircleFill
            size={24}
            color="white"
            onClick={() => onDelete(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayersTable;
