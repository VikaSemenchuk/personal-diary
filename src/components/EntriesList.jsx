import { useEffect } from "react";
import EntryCard from "./EntryCard";

const EntriesList = ({ entries, setEntries }) => {
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entryData")) || [];
    setEntries(storedEntries);
  }, []);

  const sortedEntries = entries?.sort((a, b) => b.date.localeCompare(a.date));

  // Порожній стан: записи вже завантажені, але їх 0
  if (entries && entries.length === 0) {
    return (
      <div className="mx-auto grid max-w-xl justify-items-center gap-3 rounded-card border-[1.5px] border-dashed border-line-strong bg-surface px-6 py-12 text-center sm:py-16">
        <h2 className="text-title-md">Your diary is empty</h2>
        <p className="max-w-[36ch] text-text-muted">
          Tap <span className="font-semibold text-text">Add Entry</span> to
          write your first memory — a few lines about today is enough.
        </p>
      </div>
    );
  }

  return (
    // auto-fill + minmax: на телефоні 1 колонка, далі 2–4 — без жодного медіазапиту
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,16rem),1fr))] gap-4 sm:gap-6">
      {sortedEntries?.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          setEntries={setEntries}
          sortedEntries={sortedEntries}
        />
      ))}
    </ul>
  );
};

export default EntriesList;
