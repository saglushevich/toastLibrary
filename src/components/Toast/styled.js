import styled from "styled-components";

import resolveAnimation from "utils/resolveAnimation";
import getPositions from "utils/getPositions";

export const ToastWrapper = styled.div`
  position: absolute;
  background-color: ${(props) => props.background};
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;
  cursor: pointer;
  ${(props) => getPositions(props.position).selectedPosition};
  animation: ${({ animation, direction, position }) =>
      resolveAnimation(
        animation,
        direction,
        getPositions(position).animationPosition
      )}
    0.6s forwards;
`;

export const ToastContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding}px;
`;

export const ToastTitle = styled.div`
  display: block;
  font-size: 22px;
  font-weight: 400;
  color: ${(props) => props.color};
  margin-left: 20px;
  margin-right: 70px;
  user-select: none;
`;

export const ToastBtn = styled.div`
  position: absolute;
  top: 0px;
  right: 25px;
  color: #fff;
  font-size: 42px;
`;
