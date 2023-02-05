import PropTypes from "prop-types";

import ErrorBoundary from "components/ErrorBoundary";
import ToastContainer from "components/ToastContainer";
import { toast } from "utils/singletone";
import getPositions from "utils/getPositions";
import { useToasts } from "hooks";

import { ToastsBoardWrapper, ToastsBoardButton } from "./styled";

function ToastsBoard(props) {
  const onAddToast = () => {
    toast.addToast(props);
  };

  const [topRight, topLeft, bottomLeft, bottomRight] = getPositions(
    useToasts()
  );

  return (
    <ErrorBoundary>
      <ToastsBoardWrapper id="toasts-board">
        <ToastsBoardButton onClick={onAddToast}>Add toast</ToastsBoardButton>
        {topLeft.length ? (
          <ToastContainer items={topLeft} position="top-left" />
        ) : null}
        {topRight.length ? (
          <ToastContainer items={topRight} position="top-right" />
        ) : null}
        {bottomLeft.length ? (
          <ToastContainer items={bottomLeft} position="bottom-left" />
        ) : null}
        {bottomRight.length ? (
          <ToastContainer items={bottomRight} position="bottom-right" />
        ) : null}
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
