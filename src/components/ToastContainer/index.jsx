import PropTypes from "prop-types";

import Toast from "components/Toast";
import Portal from "components/Portal";
import ErrorBoundary from "components/ErrorBoundary";
import { getPositions } from "utils";
import { useToasts } from "hooks";

import ToastsBoardList from "./styled";

export function ToastContainer() {
  const [topRight, topLeft, bottomLeft, bottomRight] = getPositions(
    useToasts()
  );

  return (
    <ErrorBoundary>
      <Portal>
        <RenderList position="top-right" toasts={topRight} />
        <RenderList position="top-left" toasts={topLeft} />
        <RenderList position="bottom-right" toasts={bottomRight} />
        <RenderList position="bottom-left" toasts={bottomLeft} />
      </Portal>
    </ErrorBoundary>
  );
}

ToastContainer.propTypes = {
  toasts: PropTypes.array,
};

function RenderList({ position, toasts }) {
  if (toasts.length) {
    return (
      <ToastsBoardList data-position={position}>
        {toasts.map((item) => (
          <Toast key={item.id} toast={item} />
        ))}
      </ToastsBoardList>
    );
  }
}

RenderList.propTypes = {
  position: PropTypes.string,
  toasts: PropTypes.array,
};
