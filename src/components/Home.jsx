import { useState } from "react";

import EntriesList from "./EntriesList";
import Modal from "./Modal";
import EntryForm from "./EntryForm";

const Home = ({ isModal, close, handerOverlayClick }) => {
  const [entries, setEntries] = useState(null);

  return (
    <main className="flex min-h-screen flex-col gap-3 items-center justify-center p-24">
      {isModal && (
        <Modal onClose={() => close()} onOverlayClick={handerOverlayClick}>
          <EntryForm closeModal={() => close()} setEntries={setEntries} />
        </Modal>
      )}

      <EntriesList entries={entries} setEntries={setEntries} />
    </main>
  );
};

export default Home;
