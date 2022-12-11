import "../styles/Footer.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import kamaleon  from '../../assets/kmaleon.png'
export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerTopBox">
      <img className="kamaleon" src={kamaleon}/>
        Siguenos en nuestras redes:
        <div className="topIcons">
          <div className="boxUser">
            Kevin Mantilla:
            <AiFillFacebook size={30} color="white" />
            <AiFillLinkedin size={30} color="white" />
            <AiFillGithub size={30} color="white" />
            <AiFillInstagram size={30} color="white" />
          </div>

          <div className="boxUser">
            David Lozada:
            <AiFillFacebook size={30} color="white" />
            <AiFillLinkedin size={30} color="white" />
            <AiFillGithub size={30} color="white" />
            <AiFillInstagram size={30} color="white" />
          </div>
        </div>
      </div>

      <div className="footerBotBox">
        <div>
          <h4>FantasyTeam</h4>
          <span>Tus equipos favoritos en un solo lugar</span>
        </div>

        <div className="contactContainer">
          <h4>Contacto:</h4>
          <div className="contactRow">
            <BsFillHouseDoorFill size={22} color="white" />
            <span>Quito,UIO,EC</span>
          </div>
          <div className="contactRow">
            <GrMail size={22} color="white" />
            <span>mail1@mail.com</span>
          </div>
          <div className="contactRow">
            <GrMail size={22} color="white" />
            <span>mail2@mail.com</span>
          </div>
        </div>
        <div className="contactContainer">
          <h4>Links de utilidad:</h4>
          <div className="contactRow">
            <span>Fantasy Team</span>
          </div>
          <div className="contactRow">
            <span>Ligas</span>
          </div>
          <div className="contactRow">
            <span>Equipos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
