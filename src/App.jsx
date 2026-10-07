// import Modal from "./components/Modal";
import EntriesList from "./components/EntriesList";
// import EntryForm from "./components/EntryForm";

import { useModal } from "./hooks/useModal";

function App() {
  const [isModal, open, close, handerOverlayClick] = useModal();
  const date = new Date();
  // console.log(Number(date))
  return (
    <main className="flex min-h-screen flex-col gap-3 items-center justify-center p-24">
      <div className="aura aura-gold duration-1500 ease-in-out shadow-xl">
        <div className="card bg-base-100 ">
          <button type="button" onClick={open} className="btn card-body ">
            <p>+ Add Entry</p>
          </button>
        </div>
      </div>

      {/* {isModal && (
        <Modal
          isModal={isModal}
          onClose={() => close()}
          onOverlayClick={handerOverlayClick}
        >
          <EntryForm closeModal={() => close()} />
        </Modal>
      )} */}
      <EntriesList
        isModal={isModal}
        onClose={() => close()}
        onOverlayClick={handerOverlayClick}
      />
    </main>
  );
}

export default App;
