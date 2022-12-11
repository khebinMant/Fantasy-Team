import { Button } from 'primereact/button';

export const PlayersFT = ({ player, handleRemovePlayer }) => {

  return (
    <>
      <td><img  alt={player.idPlayer} className='player-image' src={player.strThumb}/></td>
      <td style={{margin:'auto'}}>{player.strPlayer}</td>
      <td>{player.strNumber}</td>
      <td>
        <Button 
          onClick={()=>handleRemovePlayer(player.idPlayer)}
          label="Eliminar del equipo" 
          className="p-button-outlined p-button-danger"
        />
      </td>
    </>
  )
}
