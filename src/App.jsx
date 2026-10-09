import Header from "./components/Header";
import Home from "./components/Home";

import { useModal } from "./hooks/useModal";

function App() {
  const [isModal, open, close, handerOverlayClick, animation] = useModal();

  return (
    <>
      <Header onClick={open} />
      <Home
        isModal={isModal}
        close={close}
        handerOverlayClick={handerOverlayClick}
        animation={animation}
      />
    </>
  );
}

export default App;
