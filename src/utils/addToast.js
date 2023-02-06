import { toast } from "./singletone";

export const addToast = (toastData) => () => {
  toast.addToast(toastData);
};
