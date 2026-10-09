import { AlertIcon, CheckIcon, XIcon } from "./icons";


const styles = {
  success: "border-secondary-cust/40 bg-secondary-cust-soft text-secondary-cust",
  error: "border-error/40 bg-error-soft text-error",
};

const Toasts = ({ toasts, onClose }) => {
  return (

    <div
      aria-live="polite"
      className="toast toast-top toast-center z-60 w-[calc(100%-2rem)] max-w-sm sm:toast-end"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role={toast.type === "error" ? "alert" : "status"}
          className={`alert flex items-start gap-3 rounded-field border px-4 py-3 text-left text-sm font-medium shadow-modal motion-safe:animate-toast-in motion-reduce:animate-fade-in ${styles[toast.type]}`}
        >
          {toast.type === "error" ? (
            <AlertIcon className="mt-0.5 size-5 shrink-0" />
          ) : (
            <CheckIcon className="mt-0.5 size-5 shrink-0" />
          )}

          <span className="flex-1 whitespace-normal">{toast.message}</span>

          <button
            type="button"
            onClick={() => onClose(toast.id)}
            aria-label="Meldung schließen"
            className="-m-1 grid size-7 shrink-0 cursor-pointer place-items-center rounded-full opacity-70 transition-opacity hover:opacity-100"
          >
            <XIcon className="size-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toasts;
