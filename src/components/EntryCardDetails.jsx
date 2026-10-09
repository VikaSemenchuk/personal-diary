import Button from "./Button";
import DateChip from "./DateChip";
import { PencilIcon, TrashIcon } from "./icons";
import { capitalize } from "../utils/text";

const EntryCardDetails = ({ entry, onClickHandler, onEdit }) => {
  const { title, date, imageUrl, content } = entry;
  return (
    <article className="flow-root p-5 sm:p-8 lg:p-10">
      <img
        src={imageUrl}
        alt={capitalize(title)}
        className="mb-5 aspect-video w-full rounded-card bg-sunken object-cover lg:float-left lg:mr-8 lg:mb-4 lg:aspect-4/3 lg:w-[45%]"
      />

      <DateChip date={date} long />
      <h1 className="mt-3 text-title-lg wrap-break-word">
        {capitalize(title)}
      </h1>

      <p className="mt-4 whitespace-pre-line text-body-lg wrap-break-word">
        {capitalize(content)}
      </p>

      <div className="clear-both flex items-center justify-between gap-3 border-t border-line pt-4 mt-8">
        <Button variant="danger" onClick={onClickHandler} className="px-3">
          <TrashIcon className="size-4 transition-transform duration-200 motion-safe:group-hover/btn:-rotate-12" />
          Eintrag löschen
        </Button>

        <Button variant="secondary" onClick={onEdit}>
          <PencilIcon className="size-4 transition-transform duration-200 motion-safe:group-hover/btn:-rotate-12" />
          Bearbeiten
        </Button>
      </div>
    </article>
  );
};

export default EntryCardDetails;
