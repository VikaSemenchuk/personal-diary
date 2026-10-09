import { getToday } from "../utils/date";
import Button from "./Button";

const fieldClass =
  "w-full min-h-11 rounded-field border border-line-strong bg-surface px-3.5 py-2.5 text-text " +
  "placeholder:text-text-muted transition-[border-color,box-shadow] duration-200 hover:border-text-muted " +
  "focus:border-accent-cust focus:outline-none focus:ring-3 focus:ring-accent-cust-soft " +
  "user-invalid:border-error";
const labelClass = "text-sm font-semibold text-text";

const EntryForm = ({ closeModal, setEntries, showToast, entry = null }) => {
  const isEditing = entry !== null;
  const storedDaten = JSON.parse(localStorage.getItem("entryData"));
  const today = getToday();

  const exist = (el) =>
    storedDaten?.some((data) => data.date === el && data.id !== entry?.id);

  //   const submitHendler = (e) => {
  function submitHendler(e) {
    e.preventDefault();

    const newData = {
      date: e.currentTarget.date.value,
      imageUrl: e.currentTarget.imageUrl.value.trim(),
      content: e.currentTarget.content.value.trim(),
      title: e.currentTarget.title.value.trim(),

      id: isEditing ? entry.id : Math.random(),
    };

    if (exist(e.currentTarget.date.value)) {
    
      e.currentTarget.date.setCustomValidity(
        "Für dieses Datum gibt es schon einen Eintrag. Komm morgen wieder.",
      );
      showToast(
        "error",
        "Für dieses Datum gibt es schon einen Eintrag. Komm morgen wieder.",
      );

      return;
    } else {
      e.currentTarget.date.setCustomValidity("");
    }

    const newStored = isEditing
      ? storedDaten.map((data) => (data.id === entry.id ? newData : data))
      : storedDaten
        ? [...storedDaten, newData]
        : [newData];
  
    try {
      localStorage.setItem("entryData", JSON.stringify(newStored));
    } catch {
      showToast("error", "Speichern fehlgeschlagen. Bitte versuche es noch einmal.");
      return;
    }
    setEntries(newStored);
    showToast(
      "success",
      isEditing ? "Änderungen gespeichert." : "Eintrag gespeichert.",
    );

    e.target.reset();
    closeModal();
  }

  //   const onChangeHandler = (e) => {
  function onChangeHandler(e) {
    if (exist(e.target.value)) {
      e.target.setCustomValidity("Für dieses Datum gibt es schon einen Eintrag. Komm morgen wieder.");
      e.target.reportValidity();
    } else {
      e.target.setCustomValidity("");
    }
  }

  return (
    <form onSubmit={submitHendler} className="flex flex-col">
      <div className="px-5 pt-5 pr-16 sm:px-8 sm:pt-6">
        <h2 className="text-title-md">
          {isEditing ? "Eintrag bearbeiten" : "Neuer Eintrag"}
        </h2>
        <p className="mt-1 text-sm text-text-muted">
          {isEditing
            ? "Ändere, was du möchtest, und speichere."
            : "Ein Eintrag pro Tag. Alle Felder sind Pflichtfelder."}
        </p>
      </div>

      <div className="grid gap-5 px-5 py-6 sm:px-8">
        <div className="grid gap-2">
          <label htmlFor="title" className={labelClass}>
            Titel
          </label>
          <input
            id="title"
            className={fieldClass}
            type="text"
            name="title"
            defaultValue={entry?.title}
            placeholder="Titel"
            required
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:items-start">
          <div className="grid gap-2">
            <label htmlFor="date" className={labelClass}>
              Datum
            </label>
            <input
              id="date"
              className={fieldClass}
              type="date"
              name="date"
              defaultValue={entry?.date ?? today}
              max={today}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="imageUrl" className={labelClass}>
              Bild-URL
            </label>
            <input
              id="imageUrl"
              className={fieldClass}
              type="URL"
              name="imageUrl"
              defaultValue={entry?.imageUrl}
              placeholder="https://..."
              onChange={(e) => {
                !e.target.validity.valid && e.target.reportValidity();
              }}
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="content" className={labelClass}>
            Deine Erinnerung
          </label>
          <textarea
            id="content"
            className={`${fieldClass} min-h-36 resize-y`}
            name="content"
            defaultValue={entry?.content}
            placeholder="Erzähl mir alles …"
            required
          />
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-line px-5 py-4 sm:flex-row sm:justify-end sm:px-8">
        <Button
          variant="secondary"
          onClick={closeModal}
          className="w-full sm:w-auto"
        >
          Abbrechen
        </Button>
        <Button type="submit" className="w-full sm:w-auto">
          {isEditing ? "Änderungen speichern" : "Speichern"}
        </Button>
      </div>
    </form>
  );
};

export default EntryForm;
