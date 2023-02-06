import { useState, useEffect } from "react";

import { toast } from "utils";

export const useToasts = () => {
  const [toastList, setToastList] = useState(toast.toasts);

  const updateList = (list) => {
    setToastList(list);
  };

  useEffect(() => {
    toast.subscribe("update_list", updateList);
    return () => {
      toast.unsubscribe("update_list");
    };
  }, []);

  return toastList;
};
