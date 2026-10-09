import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Toasts from "./components/Toasts";

import { useModal } from "./hooks/useModal";
import { useToast } from "./hooks/useToast";

function App() {
  const [isModal, open, close, handerOverlayClick, animation] = useModal();
  const [toasts, showToast, hideToast] = useToast();

  return (
 
    <div className="flex min-h-dvh flex-col">
      <Header onClick={open} />
      <Home
        isModal={isModal}
        close={close}
        handerOverlayClick={handerOverlayClick}
        animation={animation}
        showToast={showToast}
      />
      <Footer />
      <Toasts toasts={toasts} onClose={hideToast} />
    </div>
  );
}

export default App;
