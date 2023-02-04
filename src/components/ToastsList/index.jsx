import Toast from "components/Toast";
import { useToasts } from "hooks";

import ToastsBoardList from "./styled";

function ToastsList() {
  const toasts = useToasts();

  return (
    <ToastsBoardList>
      {toasts.map((item) => (
        <Toast key={item.id} toast={item} />
      ))}
    </ToastsBoardList>
  );
}

export default ToastsList;
