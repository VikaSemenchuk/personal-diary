import logo from "../assets/logo.png";

// Лого — посилання-якір на початок сторінки.
// href="#top" — особливе значення в HTML: браузер прокручує на самий верх,
// навіть якщо елемента з id="top" немає. Плавність дає scroll-behavior: smooth в index.css.
const Logo = () => {
  return (
    <a
      href="#top"
      aria-label="Echtzeit – zum Seitenanfang"
      className="group flex items-center rounded-full pr-3 transition-opacity duration-200 hover:opacity-85"
    >
      <img
        src={logo}
        className="size-18 shrink-0 rounded-full object-contain transition-transform duration-300 ease-out motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-105"
        alt=""
      />
      <div className="leading-none">
        <p className="font-title text-title-sm font-semibold text-secondary-cust">
          Echtzeit
        </p>
        <p className="mt-0.5 text-overline uppercase text-text-muted">
          Sei hier
        </p>
      </div>
    </a>
  );
};

export default Logo;
