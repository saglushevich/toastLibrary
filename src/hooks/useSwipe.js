import { useState } from "react";

export const useSwipe = (action) => {
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);

  const onMouseDown = (e) => {
    setEndPosition(0);
    setStartPosition(e.clientX);
  };

  const onMouseMove = (e) => {
    setEndPosition(e.clientX);
  };

  const onMouseUp = () => {
    if (!startPosition || !endPosition) {
      return;
    }

    const positionDifference = startPosition - endPosition;

    if (positionDifference) {
      action();
    }
  };

  return [onMouseDown, onMouseMove, onMouseUp];
};
