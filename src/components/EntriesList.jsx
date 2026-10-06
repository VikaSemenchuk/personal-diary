import Modal from "./Modal";

import { useModal } from "../hooks/useModal";

const EntriesList = () => {
  const [isModal, open, close, handerOverlayClick] = useModal();
  return (
    <section className="card w-full flex gap-3 shadow-xl">
      <div className="card-body">EntriesList</div>
      <button type="button" onClick={open} className="btn btn-primary">
        Show Details
      </button>
      {isModal && (
        <Modal onClose={close} onOverlayClick={handerOverlayClick}>
          EntriesList Modal content
        </Modal>
      )}
    </section>
  );
};

export default EntriesList;
