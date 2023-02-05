import styled from "styled-components";

import resolveAnimation from "utils/resolveAnimation";

export const ToastWrapper = styled.div`
  position: relative;
  width: 340px;
  background-color: ${(props) => props.background};
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;
  cursor: pointer;
  animation: ${({ animation, direction, position }) =>
      resolveAnimation(
        animation,
        direction,
        position === "top-left" || position === "bottom-left" ? "left" : "right"
      )}
    0.6s forwards;
`;

export const ToastContent = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding}px;
`;

export const ToastTitle = styled.div`
  display: block;
  font-size: 22px;
  font-weight: 400;
  color: ${(props) => props.color};
  margin-left: 15px;
  margin-right: 40px;
  user-select: none;
`;

export const ToastBtn = styled.div`
  position: absolute;
  top: 0px;
  right: 25px;
  color: #fff;
  font-size: 42px;
`;
