import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export default function useDrag() {
  const [clicked, setClicked] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const position = React.useRef(0);

  const dragStart = React.useCallback((ev) => {
    position.current = ev.clientX;
    setClicked(true);
  }, []);

  const dragStop = React.useCallback(() =>
      window.requestAnimationFrame(() => {
        setDragging(false);
        setClicked(false);
      }),
    []
  );

  const dragMove = (ev, cb) => {
    const newDiff = position.current - ev.clientX;

    const movedEnough = Math.abs(newDiff) > 5;

    if (clicked && movedEnough) {
      setDragging(true);
    }

    if (dragging && movedEnough) {
      position.current = ev.clientX;
      cb(newDiff);
    }
  };

  const  onWheel =(apiObj, ev) => {
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

  const handleDrag = (scrollContainer) => (ev) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  const  RightArrow = () => {
      const { isLastItemVisible, scrollNext, visibleElements } = React.useContext(
        VisibilityContext
      );
        const [disabled, setDisabled] = React.useState(
        !visibleElements.length && isLastItemVisible
      );
      React.useEffect(() => {
        if (visibleElements.length) {
          setDisabled(isLastItemVisible);
        }
      }, [isLastItemVisible, visibleElements]);
    
      return (
        <div style={{ marginLeft:'10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <i disabled={disabled}
            onClick={() => scrollNext()} className="pi pi-arrow-right" style={{'fontSize': '2em'}}
          ></i>
        </div>
      );
    }

    const LeftArrow = ()=> {
      const {
        isFirstItemVisible,
        scrollPrev,
        visibleElements,
        initComplete
      } = React.useContext(VisibilityContext);
    
      const [disabled, setDisabled] = React.useState(
        !initComplete || (initComplete && isFirstItemVisible)
      );
      React.useEffect(() => {
        if (visibleElements.length) {
          setDisabled(isFirstItemVisible);
        }
      }, [isFirstItemVisible, visibleElements]);
    
      return (
        <div style={{ marginRight:'10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <i disabled={disabled}
            onClick={() => scrollPrev()} className="pi pi-arrow-left" style={{'fontSize': '2em'}}
          ></i>
        </div>
      );
    }

  return {
    dragStart,
    dragStop,
    dragMove,
    dragging,
    position,
    setDragging,
    onWheel,
    handleDrag,
    RightArrow,
    LeftArrow
  };
}