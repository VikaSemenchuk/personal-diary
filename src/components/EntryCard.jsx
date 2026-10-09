import { useState } from "react";
import Modal from "./Modal";
import EntryCardDetails from "./EntryCardDetails";
import EntryForm from "./EntryForm";
import Button from "./Button";
import DateChip from "./DateChip";
import { ChevronRightIcon, TrashIcon } from "./icons";
import { capitalize } from "../utils/text";
import { useModal, CLOSE_DURATION } from "../hooks/useModal";

const REMOVE_DURATION = 250;
const EntryCard = ({ entry, setEntries, sortedEntries, showToast, index = 0 }) => {
  const [isModal, open, close, handerOverlayClick, animation] = useModal();

  const [isEditing, setIsEditing] = useState(false);

  const [isRemoving, setIsRemoving] = useState(false);

  const { title, date, imageUrl, content } = entry;

  
  const onClickHandler = () => {
    const filtredEntries = sortedEntries.filter((arr) => arr.id !== entry.id);

    
    try {
      localStorage.setItem("entryData", JSON.stringify(filtredEntries));
    } catch {
      showToast("error", "Löschen fehlgeschlagen. Bitte versuche es noch einmal.");
      return false;
    }

    setEntries(filtredEntries);
    return true;
  };

  const deleteWithAnimation = () => {
    setIsRemoving(true);
    setTimeout(() => {
      if (onClickHandler()) {
        showToast("success", "Eintrag gelöscht.");
      } else {
        setIsRemoving(false); // помилка — повертаємо картку на місце
      }
    }, REMOVE_DURATION);
  };

  const deleteFromDetails = () => {
    close();
    setTimeout(deleteWithAnimation, CLOSE_DURATION);
  };

  const openDetails = (e) => {
    setIsEditing(false);
    open(e);
  };

  return (
    <>
      <li
        style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
        className={`group card-body flex w-full max-w-md flex-none flex-col sm:w-card sm:max-w-none rounded-card border border-line bg-surface shadow-card transition-[translate,box-shadow,border-color] duration-300 ease-out hover:border-line-strong hover:shadow-card-hover motion-safe:hover:-translate-y-1.5 ${
          isRemoving
            ? "pointer-events-none motion-safe:animate-card-out motion-reduce:animate-fade-out"
            : "motion-safe:animate-fade-up motion-reduce:animate-fade-in"
        }`}
      >
        <div
          onClick={openDetails}
          className="flex flex-1 cursor-pointer flex-col rounded-t-card text-left"
        >
          <div className="aspect-4/3 w-full overflow-hidden rounded-card bg-sunken">
            <img
              src={imageUrl}
              className="size-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <DateChip date={date} />
            <h2 className="line-clamp-2 text-title-sm wrap-break-word transition-colors duration-200 group-hover:text-accent-cust-text">
              {capitalize(title)}
            </h2>
            <p className="line-clamp-2 text-sm text-text-muted wrap-break-word">
              {capitalize(content)}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-line px-2 pt-1">
          <Button
            variant="danger"
            onClick={deleteWithAnimation}
            aria-label={`Eintrag „${title}“ löschen`}
            className="px-3"
          >
            <TrashIcon className="size-4 transition-transform duration-200 motion-safe:group-hover/btn:-rotate-12" />
            Löschen
          </Button>

          <Button
            variant="soft"
            onClick={openDetails}
            aria-haspopup="dialog"
            aria-label={`Details anzeigen: ${title}`}
            className="pr-3 pl-4"
          >
            Details
            <ChevronRightIcon className="size-4 transition-transform duration-200 motion-safe:group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </li>

      {isModal && (
        <Modal
          size={isEditing ? "md" : "lg"}
          animation={animation}
          onClose={close}
          onOverlayClick={handerOverlayClick}
        >
          <div key={isEditing ? "edit" : "view"} className="animate-fade-in">
            {isEditing ? (
              <EntryForm
                entry={entry}
                setEntries={setEntries}
                showToast={showToast}
                closeModal={() => setIsEditing(false)}
              />
            ) : (
              <EntryCardDetails
                entry={entry}
                onClickHandler={deleteFromDetails}
                onEdit={() => setIsEditing(true)}
              />
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default EntryCard;
