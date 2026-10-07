import Modal from "./Modal";
import EntryForm from "./EntryForm";
import EntryCard from "./EntryCard";

import { useState, useEffect } from "react";

const EntriesList = ({ isModal, onClose, onOverlayClick }) => {
  const [entries, setEntries] = useState([]);
  
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entryData")) || [];
    setEntries(storedEntries);
  }, []);
  // const [entries, setEntries] = useState(
  //   JSON.parse(localStorage.getItem("entryData")) || [],
  // );

  const sortedEntries = entries.sort((a, b) => b.date.localeCompare(a.date));

  // console.log(entries)

  return (
    <section className="card w-full flex gap-3 shadow-xl">
      {isModal && (
        <Modal onClose={onClose} onOverlayClick={onOverlayClick}>
          <EntryForm closeModal={onClose} setEntries={setEntries} />
        </Modal>
      )}

      {sortedEntries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          setEntries={setEntries}
          sortedEntries={sortedEntries}
        />
      ))}
    </section>
  );
};

export default EntriesList;
