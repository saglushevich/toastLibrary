import styled from "styled-components";

const ToastsListWrapper = styled.div`
  position: fixed;
  margin: ${({ theme }) => theme.gaps.s};
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.xs};
  &[data-position^="top-"] {
    top: 0;
  }

  &[data-position^="bottom-"] {
    bottom: 0;
  }

  &[data-position$="-right"] {
    right: 0;
  }

  &[data-position$="-left"] {
    left: 0;
  }
`;

export default ToastsListWrapper;
