import { useState } from "react";

import EntriesList from "./EntriesList";
import Modal from "./Modal";
import EntryForm from "./EntryForm";
import { formatDate, getToday } from "../utils/date";

const Home = ({ isModal, close, handerOverlayClick }) => {
  const [entries, setEntries] = useState(null);

  const count = entries?.length ?? 0;
  const todayLabel = formatDate(getToday(), {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-content px-4 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16">
      <section className="mb-6 sm:mb-10">
        <p className="text-overline font-semibold uppercase text-text-muted">
          {todayLabel}
        </p>
        <h1 className="mt-2">My Diary</h1>
        <p className="mt-2 text-text-muted">
          {count} {count === 1 ? "entry" : "entries"} · newest first
        </p>
      </section>

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
