import styled from "styled-components";

export const ToastsBoardWrapper = styled.div`
  display: block;
  height: 75vh;
`;

export const ToastsBoardButton = styled.button`
  padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps.l}`};
  border-radius: ${({ theme }) => theme.borderSizes.m};
  background: #786576;
  border: ${({ theme }) => theme.borderSizes.s} solid #786576;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.m};
  cursor: pointer;
`;
