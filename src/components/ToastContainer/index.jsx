import PropTypes from "prop-types";

import Toast from "components/Toast";
import Portal from "components/Portal";

import ToastsBoardList from "./styled";

function ToastContainer({ items, position }) {
  return (
    <Portal>
      <ToastsBoardList data-position={position}>
        {items.map((item) => (
          <Toast key={item.id} toast={item} />
        ))}
      </ToastsBoardList>
    </Portal>
  );
}

ToastContainer.propTypes = {
  items: PropTypes.array,
  position: PropTypes.string,
};

export default ToastContainer;
