const getPositions = (position) => {
  let selectedPosition = {};
  let animationPosition = "";

  switch (position) {
    case "top-right":
      selectedPosition = { top: 0, right: 0 };
      animationPosition = "right";
      break;
    case "bottom-left":
      selectedPosition = { bottom: 0, left: 0 };
      animationPosition = "left";
      break;
    case "bottom-right":
      selectedPosition = { bottom: 0, right: 0 };
      animationPosition = "right";
      break;
    default:
      selectedPosition = { top: 0, left: 0 };
      animationPosition = "left";
  }

  return { selectedPosition, animationPosition };
};

export default getPositions;
