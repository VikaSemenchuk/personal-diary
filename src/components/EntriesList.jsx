import { useEffect } from "react";
import EntryCard from "./EntryCard";

const EntriesList = ({ entries, setEntries }) => {
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entryData")) || [];
    setEntries(storedEntries);
  }, []);

  const sortedEntries = entries?.sort((a, b) => b.date.localeCompare(a.date));

  if (entries && entries.length === 0) {
    return (
      <div className="mx-auto grid max-w-xl motion-safe:animate-fade-up motion-reduce:animate-fade-in justify-items-center gap-3 rounded-card border-[1.5px] border-dashed border-line-strong bg-surface px-6 py-12 text-center sm:py-16">
        <h2 className="text-title-md">Dein Tagebuch ist leer</h2>
        <p className="max-w-[36ch] text-text-muted">
          Tippe auf <span className="font-semibold text-text">Neuer Eintrag</span>,
          um deine erste Erinnerung festzuhalten – ein paar Zeilen über heute reichen.
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {sortedEntries?.map((entry, index) => (
        <EntryCard
          key={entry.id}
          index={index}
          entry={entry}
          setEntries={setEntries}
          sortedEntries={sortedEntries}
        />
      ))}
    </ul>
  );
};

export default EntriesList;
