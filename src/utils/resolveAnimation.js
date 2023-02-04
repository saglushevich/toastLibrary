import { SLIDE_RIGHT, SLIDE_LEFT, FADE } from "constants";

const resolveAnimation = (animation, direction, position) => {
  if (animation === "slide") {
    return position === "left" ? SLIDE_LEFT[direction] : SLIDE_RIGHT[direction];
  }
  return FADE[direction];
};

export default resolveAnimation;
