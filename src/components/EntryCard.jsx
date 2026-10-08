import Modal from "./Modal";
import EntryCardDetails from "./EntryCardDetails";
import Button from "./Button";
import DateChip from "./DateChip";
import { TrashIcon } from "./icons";
import { useModal } from "../hooks/useModal";

const EntryCard = ({ entry, setEntries, sortedEntries }) => {
  const [isModal, open, close, handerOverlayClick] = useModal();

  const { title, date, imageUrl, content } = entry;

  const onClickHandler = () => {
    const filtredEntries = sortedEntries.filter((arr) => arr.id !== entry.id);

    setEntries(filtredEntries);
    localStorage.setItem("entryData", JSON.stringify(filtredEntries));
  };

  return (
    <>
      <li className="group card-body flex flex-col rounded-card border border-line bg-surface shadow-card transition duration-200 hover:shadow-card-hover motion-safe:hover:-translate-y-0.5">
        {/* <button>, а не <div>: картку можна відкрити з клавіатури (Tab + Enter) */}
        <button
          type="button"
          onClick={open}
          aria-haspopup="dialog"
          className="flex flex-1 cursor-pointer flex-col rounded-t-card text-left"
        >
          <div className="aspect-4/3 w-full overflow-hidden rounded-card bg-sunken">
            <img
              src={imageUrl}
              className="size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <DateChip date={date} />
            <h2 className="line-clamp-2 text-title-sm wrap-break-word">{title}</h2>
            <p className="line-clamp-2 text-sm text-text-muted wrap-break-word">
              {content}
            </p>
          </div>
        </button>

        <div className="flex justify-end border-t border-line px-2 pt-1">
          <Button
            variant="danger"
            onClick={onClickHandler}
            aria-label={`Delete entry ${title}`}
            className="px-3"
          >
            <TrashIcon />
            Delete
          </Button>
        </div>
      </li>

      {isModal && (
        <Modal
          entry={entry}
          onClose={close}
          onOverlayClick={handerOverlayClick}
        >
          <EntryCardDetails entry={entry} onClickHandler={onClickHandler} />
        </Modal>
      )}
    </>
  );
};

export default EntryCard;
