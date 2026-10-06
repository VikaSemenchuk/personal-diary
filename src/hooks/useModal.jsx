import { useState } from "react";

export function useModal() {
  const [isModal, setIsModal] = useState(false);

  const open = () => setIsModal(true);
  const close = () => setIsModal(false);
  const handerOverlayClick = (e) =>
    e.target === e.currentTarget && setIsModal(false);

  return [isModal, open, close, handerOverlayClick];
}
