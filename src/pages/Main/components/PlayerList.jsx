import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Box from "@mui/material/Box";
import useDrag from "../../../hooks/useDrag";
import Card from "../../../ui/components/PlayerCard/Card";
import '../../../styles/MainPage.css'

export const PlayerList = () => {

  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const  onWheel = (apiObj, ev) =>   {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }
  const n = 12;

  return (
    <Box className="player-list-content">
      <Box>
        <div className="players-gallery">
          <div className="test" onMouseLeave={dragStop}>
            <ScrollMenu
              onWheel={onWheel}
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
            >
              {[...Array(n)].map((e, i) => (
                <Card className="card-container" title="algo" back="atras">
                  <img alt="porelmomento" src="https://www.pngall.com/wp-content/uploads/5/Lionel-Messi-PNG-Photo.png" className="image-card" />
                </Card>
              ))}
            </ScrollMenu>
          </div>
        </div>
      </Box>
    </Box>
  );
};
