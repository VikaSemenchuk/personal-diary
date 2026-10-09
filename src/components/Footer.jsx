import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear(); 

  return (
   
    <footer className="mt-auto border-t border-line bg-surface/60">
      <div className="footer mx-auto max-w-content items-center justify-items-center gap-4 px-2 py-8 text-center text-text-muted sm:footer-horizontal sm:justify-between sm:px-8 md:px-4">
    
        <Logo compact />
        <p className="text-sm">© {year} Echtzeit · Dein persönliches Tagebuch</p>
      </div>
    </footer>
  );
};

export default Footer;
