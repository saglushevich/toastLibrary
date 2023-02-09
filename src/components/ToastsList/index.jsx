import PropTypes from "prop-types";

import Toast from "components/Toast";

import ToastsListWrapper from "./styled";

function ToastsList({ position, toasts }) {
  if (toasts.length) {
    return (
      <ToastsListWrapper data-position={position}>
        {toasts.map((item) => (
          <Toast key={item.id} toast={item} />
        ))}
      </ToastsListWrapper>
    );
  }
}

ToastsList.propTypes = {
  position: PropTypes.string,
  toasts: PropTypes.array,
};

export default ToastsList;
