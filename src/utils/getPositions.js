/* eslint-disable array-callback-return */
export const getPositions = (toasts) => {
  const topRight = [];
  const topLeft = [];
  const bottomLeft = [];
  const bottomRight = [];

  toasts.filter((item) => {
    switch (item.position) {
      case "top-right":
        topRight.push(item);
        break;
      case "bottom-left":
        bottomLeft.push(item);
        break;
      case "bottom-right":
        bottomRight.push(item);
        break;
      default:
        topLeft.push(item);
        break;
    }
  });

  return [topRight, topLeft, bottomLeft, bottomRight];
};
