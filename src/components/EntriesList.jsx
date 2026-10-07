import Modal from "./Modal";
import EntryForm from "./EntryForm";
import EntryDetails from "./EntryDetails";

import { useState } from "react";

const EntriesList = ({ isModal, onClose, onOverlayClick }) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("entryData")) || [],
  );

  return (
    <section className="card w-full flex gap-3 shadow-xl">
      <div className="card-body">EntriesList</div>
      <EntryDetails data={data} />

      {isModal && (
        <Modal onClose={onClose} onOverlayClick={onOverlayClick}>
          <EntryForm closeModal={onClose} setData={setData} />
        </Modal>
      )}
    </section>
  );
};

export default EntriesList;
