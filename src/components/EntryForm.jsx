import { getToday } from "../utils/date";

const EntryForm = ({ closeModal, setEntries }) => {
  const storedDaten = JSON.parse(localStorage.getItem("entryData"));
  const today = getToday();
  const exist = (el) => storedDaten?.some((data) => data.date === el);

  //   const submitHendler = (e) => {
  function submitHendler(e) {
    e.preventDefault();

    const newData = {
      date: e.currentTarget.date.value,
      imageUrl: e.currentTarget.imageUrl.value.trim(),
      content: e.currentTarget.content.value.trim(),
      title: e.currentTarget.title.value.trim(),
      id: Math.random(),
    };

    if (exist(e.currentTarget.date.value)) {
      e.currentTarget.date.setCustomValidity(
        "Date already exist. Come back the next day.",
      );

      return;
    } else {
      e.currentTarget.date.setCustomValidity("");
    }

    const newStored = storedDaten ? [...storedDaten, newData] : [newData];
    localStorage.setItem("entryData", JSON.stringify(newStored));
    setEntries(newStored);

    e.target.reset();
    closeModal();
  }

  //   const onChangeHandler = (e) => {
  function onChangeHandler(e) {
    if (exist(e.target.value)) {
      e.target.setCustomValidity("Date already exist. Come back the next day");
      e.target.reportValidity();
    } else {
      e.target.setCustomValidity("");
    }
  }

  return (
    <form
      onSubmit={submitHendler}
      className="fieldset  bg-blue-100 border-base-300 rounded-box  border p-4"
    >
      <label htmlFor="title">Title</label>
      <input
        className="input w-full bg-gray-100"
        type="text"
        name="title"
        placeholder="Title"
        required
      />
      <label htmlFor="date">Date</label>
      <input
        className="input w-full bg-gray-100"
        type="date"
        name="date"
        defaultValue={today}
        max={today}
        onChange={onChangeHandler}
        // onBlur={blurHandler}
        required
      />

      <label htmlFor="imageUrl">Image URL</label>
      <input
        className="input w-full bg-gray-100"
        type="URL"
        name="imageUrl"
        placeholder="https://..."
        onChange={(e) => {
          !e.target.validity.valid && e.target.reportValidity();
        }}
        required
      />
      <label htmlFor="content">Your memory</label>
      <input
        className="input w-full bg-gray-100"
        type="text"
        name="content"
        placeholder="Tell me everything"
        required
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default EntryForm;
