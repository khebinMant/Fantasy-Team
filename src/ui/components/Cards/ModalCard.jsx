import { useEffect, useState } from "react";
import { getPlayer } from "../../../helpers/getPlayer";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import useDrag from "../../../hooks/useDrag";

const ModalCard = () => {
  const { dragStop, RightArrow, LeftArrow } = useDrag();
  const data = [
    {
      name: "Kevin Mantilla",
      Description:
        "Software Developer |Odoo|Python|Django |Javascript|Angular|React Currently learning GraphQL From Quito- Ecuador",
      id: "https://avatars.githubusercontent.com/u/33032880?v=4",
      linked: "https://www.linkedin.com/in/kevin-alexander-mantilla-3238a5213/",
      github: "https://github.com/khebinSd",
    },
    {
      name: "David Lozada",
      Description:
        "Programmer passionate and enjoyer of building mobile and web technologies",
      id: "https://avatars.githubusercontent.com/u/91855669?v=4",
      linked: "https://www.linkedin.com/in/david-lozada471/",
      github: "https://github.com/DashCode47",
    },
  ];

  return (
    <div className=" mapCardContainer">
      <ScrollMenu>
        {data.map((item) => (
          <div className="card-container">
            <div className="card">
              <div className="front2">
                <img alt="txt" src={item.id} className="image-card2" />
                <div className="products-txt">{item.name}</div>
              </div>
              <div className="back2">
                <div className="products-txtB">{item.Description}</div>
                <div className="iconCardContainer">
                  <a href={"https://www.facebook.com"}>
                    <AiFillFacebook size={30} color="white" />
                  </a>
                  <a href={item.linked}>
                    <AiFillLinkedin size={30} color="white" />
                  </a>
                  <a href={item.github}>
                    <AiFillGithub size={30} color="white" />
                  </a>
                </div>
                <div className="location">
                  <FaMapMarkerAlt size={31} color="white" />
                  UIO-EC
                </div>
              </div>
            </div>
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ModalCard;
