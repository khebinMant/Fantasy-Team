import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Box from "@mui/material/Box";
import useDrag from "../../../hooks/useDrag";
import Card from "./PlayerCard";
import '../../../styles/MainPage.css'

export const PlayerList = () => {

  const { dragStart, dragStop, dragMove, onWheel } = useDrag();
  const n = 12;

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
  });


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
