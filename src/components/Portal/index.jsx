import { createPortal } from "react-dom";

import { usePortal } from "hooks/usePortal";

function Portal(props) {
  const node = usePortal();

  return createPortal(props.children, node);
}

export default Portal;
