import { useState } from "react";


const TOAST_DURATION = 3500;


export function useToast() {
  const [toasts, setToasts] = useState([]);

  const hideToast = (id) =>
    setToasts((prev) => prev.filter((toast) => toast.id !== id));

  // type: "success" | "error"
  const showToast = (type, message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, type, message }]);
    
    setTimeout(() => hideToast(id), TOAST_DURATION);
  };

  return [toasts, showToast, hideToast];
}
