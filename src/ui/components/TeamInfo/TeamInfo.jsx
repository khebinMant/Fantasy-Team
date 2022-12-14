import { useEffect, useState } from "react";
import "./TeamInfo.css";

const TeamInfo = ({ data }) => {
  const [image, setImage] = useState();

  return (
    <div className="infoContainer">
      <div className="data">
        <h4>Nombre:</h4>
        <div>{data[0]?.team?.name}</div>
        <h4>Pais:</h4>
        <div>{data[0]?.team?.country}</div>
        <h4>Fundacion :</h4>
        <div>{data[0]?.team?.founded}</div>
      </div>

      <div className="skill-bar">
        <h4>Estadio :</h4>
        <img src={data[0]?.venue?.image} alt="stadium" className="estadio" />
        <div className="stadium-row-info">
          <h6>Nombre:</h6>
          <div>{data[0]?.venue?.name}</div>
          <h6>Capacidad:</h6>
          <div>{data[0]?.venue?.capacity} personas</div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
