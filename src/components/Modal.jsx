import { XIcon } from "./icons";

// Телефон: «bottom sheet» — притиснута до низу, заокруглені лише верхні кути.
// Від sm (640px): по центру екрана, заокруглена з усіх боків.
const Modal = ({ onClose, onOverlayClick, children }) => {
  return (
    <div
      onClick={(e) => onOverlayClick(e)}
      className="fixed inset-0 z-50 flex items-end justify-center bg-scrim backdrop-blur-sm sm:items-center sm:p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative flex max-h-[92dvh] w-full max-w-xl flex-col overflow-hidden rounded-t-modal bg-surface text-text shadow-modal sm:max-h-[calc(100dvh-2rem)] sm:rounded-modal"
      >
        {/* Скролиться лише вміст, кнопка закриття лишається на місці */}
        <div className="overflow-y-auto">
          {children}
        </div>

        <button
          className="absolute top-3 right-3 grid size-10 cursor-pointer place-items-center rounded-full bg-sunken/80 text-text backdrop-blur-sm transition-colors hover:bg-line sm:top-4 sm:right-4"
          type="button"
          aria-label="Close"
          onClick={() => onClose()}
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default Modal;
