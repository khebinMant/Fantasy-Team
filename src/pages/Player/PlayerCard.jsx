
const CardP = ({ strPlayer,strTeam,idPlayer,strRender,strThumb }) => {


  return (
      <div className="card-container">
        <div className="card">
          <div className="front">
            <img alt={strPlayer} src={strThumb!==null?strThumb:'https://hoqueisobregrama.com.br/wp-content/uploads/1991/04/profile_player.png'} className="image-card" />
            <div className="products-txt">{strPlayer}</div>
          </div>
          <div className="back">
            <img alt={strPlayer} src={strRender!==null?strRender:'https://cdn.icon-icons.com/icons2/2070/PNG/512/soccer_player_icon_125840.png'} className="image-card" />
            <div className="products-txt">{strTeam}</div>
          </div>
        </div>
      </div>

  );
};

export default CardP;
