import { useState, useEffect } from "react";

export const usePortal = () => {
  const [node] = useState(document.createElement("div"));

  useEffect(() => {
    node.setAttribute("id", "toasts-id");
    node.style = "height: 100%; width: 100%;";
    document.querySelector("#toasts-board").appendChild(node);

    return () => document.querySelector("#toasts-id").remove();
  }, [node]);

  return node;
};
