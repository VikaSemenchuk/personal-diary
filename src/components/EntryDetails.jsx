
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const EntryDetails = () => {
  const [isModal, open, close, handerOverlayClick] = useModal();

    return (
      <>
        <div onClick={open} className="card-body w-full bg-gray-400  ">
          EntryDetails
        </div>
        
        {isModal && (
          <Modal onClose={close} onOverlayClick={handerOverlayClick}>
            {<p>Full card</p>}
          </Modal>
        )}
      </>
    );
}

export default EntryDetails
