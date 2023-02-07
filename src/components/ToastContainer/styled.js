import styled from "styled-components";

const ToastsBoardList = styled.div`
  position: fixed;
  margin: 10px;
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 5px;
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

export default ToastsBoardList;
