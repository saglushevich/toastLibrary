import styled from "styled-components";

import { resolveAnimation } from "utils";

export const ToastWrapper = styled.div`
  position: relative;
  width: 340px;
  background-color: ${(props) => props.background};
  box-shadow: 4px 4px 8px #00000029;
  border-radius: ${({ theme }) => theme.borderSizes.l};
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
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  color: ${(props) => props.color};
  margin-left: ${({ theme }) => theme.gaps.m};
  margin-right: ${({ theme }) => theme.gaps.xl};
  user-select: none;
`;

export const ToastBtn = styled.div`
  position: absolute;
  top: 0px;
  right: ${({ theme }) => theme.gaps.l};
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
`;
