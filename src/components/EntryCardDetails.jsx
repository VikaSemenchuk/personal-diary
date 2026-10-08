import Button from "./Button";
import DateChip from "./DateChip";
import { TrashIcon } from "./icons";

const EntryCardDetails = ({ entry, onClickHandler }) => {
  const { title, date, imageUrl, content } = entry;
  return (
    <article>
      <div className="card-body  rounded-card ">
        <img
          src={imageUrl}
          alt={title}
          className="size-full object-cover rounded-card"
        />
      </div>

      <div className="px-5 pt-5 pb-6 sm:px-8 sm:pt-6 sm:pb-8">
        <DateChip date={date} long />
        <h1 className="mt-3 text-title-lg wrap-break-word">{title}</h1>
        {/* whitespace-pre-line зберігає переноси рядків, які людина ввела в textarea */}
        <p className="mt-4 max-w-[62ch] whitespace-pre-line text-body-lg wrap-break-word">
          {content}
        </p>

        <div className="mt-8 flex justify-end border-t border-line pt-4">
          <Button variant="danger" onClick={onClickHandler}>
            <TrashIcon />
            Delete entry
          </Button>
        </div>
      </div>
    </article>
  );
};

export default EntryCardDetails;
