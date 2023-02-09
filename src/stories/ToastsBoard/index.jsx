import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { ToastContainer } from "components/ToastContainer";
import { addToast } from "utils";
import { useToasts } from "hooks";
import { THEMES } from "constants";

import { ToastsBoardWrapper, ToastsBoardButton } from "./styled";

function ToastsBoard(props) {
  const list = useToasts();

  return (
    <ThemeProvider theme={THEMES}>
      <ToastsBoardWrapper>
        <ToastsBoardButton onClick={addToast(props)}>
          Add toast
        </ToastsBoardButton>
        <ToastContainer toasts={list} />
      </ToastsBoardWrapper>
    </ThemeProvider>
  );
}

ToastsBoard.propTypes = {
  animation: PropTypes.string,
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  delay: PropTypes.number,
  id: PropTypes.number,
  padding: PropTypes.number,
  position: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default ToastsBoard;
