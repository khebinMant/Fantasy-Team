import { Button } from 'primereact/button';

export const PlayersFT = ({ player, handleRemovePlayer }) => {

  return (
    <div className='player-ft' >
        <img  alt={player.id} className='player-image' src={player.strThumb}/>
        <span className='name-player'>{player.strPlayer}</span>
        <span className='name-player'>{player.strNumber}</span>
        <Button 
            onClick={()=>handleRemovePlayer(player.id)}
            label="Eliminar del equipo" 
            className="p-button-outlined p-button-danger"
        />
    </div>
  )
}
