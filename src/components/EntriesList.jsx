import { useEffect } from "react";
import EntryCard from "./EntryCard";

const EntriesList = ({ entries, setEntries }) => {
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entryData")) || [];
    setEntries(storedEntries);
  }, []);

  const sortedEntries = entries?.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="card w-full flex gap-3 shadow-xl">
      {sortedEntries?.map((entry) => (
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
