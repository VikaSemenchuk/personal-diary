import { useState } from "react";

export const CLOSE_DURATION = 200;

export function useModal() {
  const [isModal, setIsModal] = useState(false);
 
  const [isClosing, setIsClosing] = useState(false);

  const [origin, setOrigin] = useState(null);

  const open = (e) => {
    const rect = e?.currentTarget?.getBoundingClientRect?.();

    if (rect) {
     
      const buttonX = rect.left + rect.width / 2;
      const buttonY = rect.top + rect.height / 2;
     
      setOrigin({
        x: buttonX - window.innerWidth / 2,
        y: buttonY - window.innerHeight / 2,
      });
    } else {
      setOrigin(null);
    }

    setIsClosing(false);
    setIsModal(true);
  };


  const close = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModal(false);
      setIsClosing(false);
    }, CLOSE_DURATION);
  };

  const handerOverlayClick = (e) => e.target === e.currentTarget && close();

  return [isModal, open, close, handerOverlayClick, { isClosing, origin }];
}
