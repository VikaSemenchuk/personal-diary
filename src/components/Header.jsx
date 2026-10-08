const Header = ({ onClick }) => {
  return (
    <div className="aura aura-gold duration-1500 ease-in-out shadow-xl ">
      <button type="button" onClick={onClick} className="btn card-body ">
        <p>+ Add Entry</p>
      </button>
    </div>
  );
};

export default Header;
