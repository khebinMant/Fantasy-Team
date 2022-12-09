import { Skeleton } from 'primereact/skeleton';
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import Box from "@mui/material/Box";
import useDrag from '../../hooks/useDrag';

export const PlayerListSkeleton = () => {

  const n = 15; 
  const { dragStart, dragStop, dragMove, onWheel } = useDrag();


  const handleDrag = ({ scrollContainer }) => (ev) =>
  dragMove(ev, (posDiff) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += posDiff;
    }
  });

  return (

    <Box style={{marginBottom:'50px'}}>
    <h1>Jugadores</h1>
    <div className="card-gallery-skeleton">
      {/* <div className="test" onMouseLeave={dragStop}>
        <ScrollMenu
          onWheel={onWheel}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        > */}
          {
            [...Array(n)].map((e,i) => (
              <div key={i} className="card">
                <div className="front">
                  <Skeleton size="5rem"></Skeleton>
                  <Skeleton width="5rem" className="mb-2"></Skeleton>
                </div>
              </div>
              )
            )
          }
        {/* </ScrollMenu>
      </div> */}
    </div>
  </Box>
  )
}
