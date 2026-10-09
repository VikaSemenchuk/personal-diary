import { useState } from "react";

import EntriesList from "./EntriesList";
import Modal from "./Modal";
import EntryForm from "./EntryForm";
import { getToday, getTodayLabel } from "../utils/date";

const Home = ({ isModal, close, handerOverlayClick, animation }) => {
  const [entries, setEntries] = useState(null);

  const count = entries?.length ?? 0;

  return (
    <main className="mx-auto w-full max-w-content px-4 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16">
      <section className="mb-6 sm:mb-10 motion-safe:animate-fade-up motion-reduce:animate-fade-in">
       
        <time
          dateTime={getToday()}
          className="mb-2 block text-overline font-semibold uppercase text-text-muted md:hidden"
        >
          {getTodayLabel()}
        </time>
        <h1>Mein Tagebuch</h1>
        <p className="mt-2 text-text-muted">
          {count} {count === 1 ? "Eintrag" : "Einträge"} · neueste zuerst
        </p>
      </section>

      {isModal && (
        <Modal
          onClose={() => close()}
          onOverlayClick={handerOverlayClick}
          animation={animation}
        >
          <EntryForm closeModal={() => close()} setEntries={setEntries} />
        </Modal>
      )}

      <EntriesList entries={entries} setEntries={setEntries} />
    </main>
  );
};

export default Home;
