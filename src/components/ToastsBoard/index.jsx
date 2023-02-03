import PropTypes from "prop-types";

import ErrorBoundary from "components/ErrorBoundary";
import ToastsList from "components/ToastsList";
import Portal from "components/Portal";
import { toast } from "utils/singletone";

import { ToastsBoardWrapper, ToastsBoardButton } from "./styled";

function ToastsBoard(props) {
  const onAddToast = () => {
    toast.addToast(props);
  };

  return (
    <ErrorBoundary>
      <ToastsBoardWrapper id="toasts-board">
        <ToastsBoardButton onClick={onAddToast}>Add toast</ToastsBoardButton>
        <Portal>
          <ToastsList />
        </Portal>
      </ToastsBoardWrapper>
    </ErrorBoundary>
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
