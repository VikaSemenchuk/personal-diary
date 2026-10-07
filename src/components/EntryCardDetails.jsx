const EntryCardDetails = ({ entry, onClickHandler }) => {
  console.log(entry);
  const { title, date, imageUrl, content } = entry;
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <img src={imageUrl} alt="" className="image" />
      <p>{content}</p>
      <button onClick={onClickHandler} type="button" className="btn">
        Delete
      </button>
    </>
  );
};

export default EntryCardDetails;
