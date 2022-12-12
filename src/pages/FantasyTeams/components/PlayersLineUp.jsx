import update from 'immutability-helper'
import { useCallback, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Box } from './Box'
import { ItemTypes } from './ItemTypes';
import cancha from '../../../assets/cancha.png'
import { Button } from "primereact/button";
import { useSelector } from 'react-redux';

const styles = {
  color:'black',
  width: '271px',
  height: '500px',
  border: '1px solid black',
  position: 'relative',
  backgroundImage: `url(${cancha})`,
  backgroundRepeat:'no-repeat'
}

export const PlayersLineUp = ({players, saveLineUp, alignment, team}) => {

  const [boxes, setBoxes] = useState({})
  const { fantasyTeams } = useSelector((state) => state.fantasy);

  useEffect(() => {
    fillBoxesWithPlayers()
  }, [players,fantasyTeams]);

  const fillBoxesWithPlayers = ()=>{

    if(alignment!==null){
      fantasyTeams.forEach(ft => {
          if(ft.id === team.id){
            setBoxes(ft.alignment)
          }
      });
    }
  }

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes, setBoxes],
  )
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )
  return (
<div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title, img } = boxes[key]
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={true}
            img={img}
          >
          </Box>
        )
      })}
      <Button
        onClick={()=>saveLineUp(boxes)}
        label="Guardar"
        className="p-button-raised p-button-success"
        style={{position:'absolute', top:'-63px', left:'90px'}}
      />
    </div>
  )
}
