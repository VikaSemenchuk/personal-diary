import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        className="size-18 shrink-0 rounded-full object-contain "
        alt="Personal Diary logo"
      />
      <div className="leading-none">
        <p className="font-title text-title-sm font-semibold text-secondary-cust">
          Echtzeit
        </p>
        <p className="mt-0.5 text-overline uppercase text-text-muted">
          Sei hier
        </p>
      </div>
    </div>
  );
};

export default Logo;
