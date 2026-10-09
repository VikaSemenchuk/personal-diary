import Header from "./components/Header";
import Home from "./components/Home";
import Toasts from "./components/Toasts";

import { useModal } from "./hooks/useModal";
import { useToast } from "./hooks/useToast";

function App() {
  const [isModal, open, close, handerOverlayClick, animation] = useModal();
  const [toasts, showToast, hideToast] = useToast();

  return (
    <>
      <Header onClick={open} />
      <Home
        isModal={isModal}
        close={close}
        handerOverlayClick={handerOverlayClick}
        animation={animation}
        showToast={showToast}
      />
      <Toasts toasts={toasts} onClose={hideToast} />
    </>
  );
}

export default App;
