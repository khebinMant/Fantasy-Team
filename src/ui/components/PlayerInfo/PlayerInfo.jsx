import "./PlayerInfo.css";
import { Button } from "primereact/button";

const PlayerInfo = () => {
  return (
    <div className="infoContainer">
      <div className="data">
        <h4>Nombre:</h4>
        <div>Cristiano </div>
        <h4>Nacionalidad:</h4>
        <div>Portugal</div>
        <h4>Edad:</h4>
        <div>37</div>
      </div>

      <div className="skill-bar">
        <div className="bar">
          <div className="info">
            <span>Rating:</span>
          </div>
          <div className="progress-line rating">
            <span style={{ width: "40%" }}></span>
          </div>
        </div>

        <div className="bar">
          <div className="info">
            <span>Estatura:</span>
          </div>
          <div className="progress-line height">
            <span style={{ width: "70%" }}></span>
          </div>
        </div>

        <div className="bar">
          <div className="info">
            <span>Peso:</span>
          </div>
          <div className="progress-line weight">
            <span style={{ width: "100%" }}></span>
          </div>
        </div>

        <Button
          label="Anadir a Fantasia"
          onClick={() => {}}
          className="p-button-m"
        />
      </div>
    </div>
  );
};

export default PlayerInfo;
