const Modal = ({ onClose, onOverlayClick, children }) => {
  return (
    <div
      onClick={(e) => onOverlayClick(e)}
      className=" fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-10 text-gray-600">
        {children}
        <button
          className="absolute flex justify-center items-center top-2 right-4 w-6 h-6 self-center rounded-2xl cursor-pointer hover:bg-blue-500 hover-3d"
          type="button"
          onClick={() => onClose()}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Modal;
