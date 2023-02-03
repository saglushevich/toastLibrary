import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HandySvg } from "handy-svg";
import { useSwipeable } from "react-swipeable";

import info from "assets/information.svg";
import error from "assets/error.svg";
import success from "assets/success.svg";
import warning from "assets/warning.svg";
import { toast } from "utils/singletone";
import { TIMER_DELAY } from "constants";

import { ToastWrapper, ToastTitle, ToastContent, ToastBtn } from "./styled";

function Toast(props) {
  const [animationDirection, setAnimationDirection] = useState("forward");

  const {
    title,
    type,
    bgcolor,
    color,
    animation,
    delay,
    position,
    id,
    padding,
  } = props.toast;

  const onCloseNotification = () => () => {
    setAnimationDirection("backward");
  };

  useEffect(() => {
    if (delay > 500) {
      const timer = setTimeout(() => {
        setAnimationDirection("backward");
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  useEffect(() => {
    if (animationDirection === "backward") {
      const timer = setTimeout(() => {
        toast.removeToast(id);
      }, TIMER_DELAY);
      return () => clearTimeout(timer);
    }
  }, [animationDirection, id]);

  const handlers = useSwipeable({
    onSwiped: onCloseNotification(),
    swipeDuration: TIMER_DELAY,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <ToastWrapper
      {...handlers}
      background={bgcolor}
      position={position}
      animation={animation}
      direction={animationDirection}
    >
      <ToastContent padding={padding}>
        <ToastImg type={type} color={color} />
        <ToastTitle color={color}>{title}</ToastTitle>
        <ToastBtn onClick={onCloseNotification(id)}>&times;</ToastBtn>
      </ToastContent>
    </ToastWrapper>
  );
}

function ToastImg({ type, color }) {
  switch (type) {
    case "warning":
      return <HandySvg src={warning} fill={color} width="50" height="50" />;
    case "error":
      return <HandySvg src={error} fill={color} width="50" height="50" />;
    case "success":
      return <HandySvg src={success} fill={color} width="50" height="50" />;
    default:
      return <HandySvg src={info} fill={color} width="50" height="50" />;
  }
}

Toast.propTypes = {
  toast: PropTypes.object,
};

ToastImg.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};

export default Toast;
