import Logo from "./Logo";
const Header = ({ onClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#3A332E]/30  backdrop-blur-3xl shadow-lg shadow-[#3A332E]  ">
      <div className="container flex justify-between items-center p-4">
        <Logo />

        <div className="aura aura-gold duration-1500 ease-in-out shadow-xl rounded-3xl">
          <button
            type="button"
            onClick={onClick}
            className="btn text-[12px] p-2 h-auto rounded-3xl"
          >
            + Add Entry
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
