import { Skeleton } from 'primereact/skeleton';
import useDrag from '../../hooks/useDrag';
import { ScrollMenu } from "react-horizontal-scrolling-menu";

export const CardListSkeleton = () => {

  const { dragStop, RightArrow, LeftArrow } = useDrag();

  const n = 8; 

  return (

    <div className="players-gallery">
    <div onMouseLeave={dragStop}>
      <ScrollMenu
        RightArrow={RightArrow}
        LeftArrow={LeftArrow}
      >
        {
          [...Array(n)].map((e,i) => (
            <div key={i} className="skeletons">
                <Skeleton style={{marginLeft:'20px'}} width="180px" height="280px"></Skeleton>
            </div>
            )
          )
        }
      </ScrollMenu>
    </div>
    </div>
  )
}
