import Logo from "./Logo";
import Button from "./Button";
import { PlusIcon } from "./icons";
import { getToday, getTodayLabel } from "../utils/date";

const Header = ({ onClick }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-line shadow-accent-cust-soft shadow-2xl bg-bg-primary/50 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] px-2 md:px-4 py-1 md:py-2 sm:px-8 sm:py-3">
        <Logo />

        <time
          dateTime={getToday()}
          className="hidden text-overline font-semibold uppercase text-text-muted md:block"
        >
          {getTodayLabel()}
        </time>

        <Button onClick={onClick} className="px-4 sm:px-5 md:justify-self-end">
          <PlusIcon className="size-5 transition-transform duration-300 ease-out motion-safe:group-hover/btn:rotate-90" />
          Add Entry
        </Button>
      </div>
    </header>
  );
};

export default Header;
