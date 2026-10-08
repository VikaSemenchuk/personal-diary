import Logo from "./Logo";
import Button from "./Button";
import { PlusIcon } from "./icons";

const Header = ({ onClick }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-line shadow-accent-cust-soft shadow-2xl bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-2 md:px-4 py-1 md:py-2 sm:px-8 sm:py-3">
        <Logo />

        <Button onClick={onClick} className="px-4 sm:px-5">
          <PlusIcon />
          Add Entry
        </Button>
      </div>
    </header>
  );
};

export default Header;
