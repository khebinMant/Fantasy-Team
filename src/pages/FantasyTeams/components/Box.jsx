import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  borderRadius: '100%',
  backgroundRepeat:'no-repeat',
  backgroundSize:'contain',
  width:'50px',
  height:'50px',
  cursor: 'move',
  textAlign:'center',
  fontSize: '10px',
}
export const Box = ({ id, left, top, hideSourceOnDrag, children,img }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div
        className="box backcancha"
        ref={drag}
        style={{ ...style, left, top, backgroundImage:`url(${img})`}}
        data-testid="box"
    >
      {children}
    </div>
  )
}
