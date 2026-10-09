import { useEffect } from "react";
import { XIcon } from "./icons";

const sizes = {
  md: "max-w-xl",
  lg: "max-w-xl lg:max-w-4xl",
};

const Modal = ({
  onClose,
  onOverlayClick,
  size = "md",
  animation = {},
  children,
}) => {
  const { isClosing = false, origin = null } = animation;

  const originStyle = origin
    ? { "--from-x": `${origin.x}px`, "--from-y": `${origin.y}px` }
    : undefined;

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const opener = document.activeElement;
    document.body.style.overflow = "hidden";
    document
      .querySelector('[role="dialog"] [aria-label="Schließen"]')
      ?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = "";
      opener?.focus?.({ preventScroll: true });
    };
  }, []);

  const scrimAnimation = isClosing ? "animate-fade-out" : "animate-fade-in";
  const panelAnimation = isClosing
    ? "motion-safe:max-sm:animate-sheet-out motion-safe:sm:animate-modal-out motion-reduce:animate-fade-out"
    : "motion-safe:max-sm:animate-sheet-in motion-safe:sm:animate-modal-in motion-reduce:animate-fade-in";

  return (
    <div
      onClick={(e) => onOverlayClick(e)}
      className={`fixed inset-0 z-50 flex items-end justify-center bg-scrim backdrop-blur-sm sm:items-center sm:p-4 ${scrimAnimation}`}
    >
      <div
        style={originStyle}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={`relative flex max-h-[92dvh] w-full ${sizes[size]} flex-col overflow-hidden rounded-t-modal bg-surface text-text shadow-modal outline-none transition-[max-width] duration-300 ease-out sm:max-h-[calc(100dvh-2rem)] sm:rounded-modal ${panelAnimation}`}
      >
        <div className="overflow-y-auto overscroll-contain">{children}</div>

        <button
          className="absolute top-3 right-3 grid size-10 cursor-pointer place-items-center rounded-full bg-sunken/80 text-text backdrop-blur-sm transition-[background-color,rotate] duration-300 ease-out hover:bg-line motion-safe:hover:rotate-90 sm:top-4 sm:right-4"
          type="button"
          aria-label="Schließen"
          onClick={() => onClose()}
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default Modal;
