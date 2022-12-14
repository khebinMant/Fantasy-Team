import React from "react";
import Card from "../PlayerCard/Card";
import TeamInfo from "../TeamInfo/TeamInfo";

const TeamCard = ({ data }) => {
  return (
    <div className="screenContainer">
      <div className="cardContainer">
        <Card
          title={data[0]?.team?.name}
          children={data[0]?.team?.logo}
          back={data[0]?.team?.founded}
          backTitle={"Founded"}
        />
      </div>
      <TeamInfo data={data} />
    </div>
  );
};

export default TeamCard;
