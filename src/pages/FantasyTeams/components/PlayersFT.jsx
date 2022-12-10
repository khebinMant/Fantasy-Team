import { Button } from 'primereact/button';

export const PlayersFT = ({handleRemovePlayer, numero}) => {

  return (
    <div className='player-ft' >
        <span className='name-player'>7</span>
        <span className='name-player'>Cristiano Ronaldo</span>
        <Button 
            onClick={()=>handleRemovePlayer(numero)}
            label="Borrar" 
            className="p-button-outlined p-button-danger"
        />
    </div>
  )
}
