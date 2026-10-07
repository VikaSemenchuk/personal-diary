import Modal from "./Modal";
import EntryCardDetails from "./EntryCardDetails";
import { useModal } from "../hooks/useModal";

const EntryCard = ({ entry, setEntries, sortedEntries }) => {
  const [isModal, open, close, handerOverlayClick] = useModal();
  // console.log(entry);

  const { title, date, imageUrl } = entry;

  const onClickHandler = () => {
    const filtredEntries = sortedEntries.filter((arr) => arr.id !== entry.id);

    setEntries(filtredEntries);
    localStorage.setItem("entryData", JSON.stringify(filtredEntries));
    // localStorage.removeItem(id);
  };

  return (
    <>
      <div className="card-body w-full bg-gray-400  ">
        <div onClick={open}>
          <h1>{title}</h1>
          <p>{date}</p>
          <img src={imageUrl} className="w-100" alt="" />
        </div>
        <button onClick={onClickHandler} type="button" className="btn">
          Delete
        </button>
      </div>

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
