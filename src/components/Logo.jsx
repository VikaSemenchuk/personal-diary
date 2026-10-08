import logo from "../assets/logo.png";

const Logo = () => {
  return (
      <div className="wrapper flex items-center ">
      <img
        src={logo}
        className="h-15 w-15 object-contain drop-shadow-sm rounded-full  drop-shadow-[#E6EEE3]"
        alt="Personal Diary logo"
      />
      <div>
        <p className="text-[10px] italic">Echtzeit</p>
        <p className="text-[10px] italic">Sei hier</p>
      </div>
    </div>
  );
};

export default Logo;
