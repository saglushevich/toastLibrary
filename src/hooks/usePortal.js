import { useState, useLayoutEffect } from "react";

export const usePortal = () => {
  const [node] = useState(document.createElement("div"));

  useLayoutEffect(() => {
    node.setAttribute("id", "toasts-id");
    node.style = "height: 100%; width: 100%; padding-top: 20px;";
    document.querySelector("#toasts-board").appendChild(node);
  }, [node]);

  return node;
};
