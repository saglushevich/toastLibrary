import { createPortal } from "react-dom";

import { usePortal } from "hooks";

function Portal(props) {
  const node = usePortal();

  return createPortal(props.children, node);
}

export default Portal;
