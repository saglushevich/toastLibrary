import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: #000;
  text-align: center;
  margin-top: ${({ theme }) => theme.gaps["3xl"]};
`;

export default ErrorMessage;
