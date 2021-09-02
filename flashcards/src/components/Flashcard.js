const Flashcard = (props) => {
  return (
    <section
      className="card"
      onClick={(event) => {
        props.handleFlashcardClick(props.card);
      }}
    >
      <h3>{props.card.category}</h3>

      {props.card.flipped === true ? ( // if true
        <p>{props.card.back}</p> // do this
      ) : (
        // else
        <p>{props.card.front}</p> // do this
      )}

      <button
        onClick={(e) => {
          props.handleFlashcardDelete(e, props.card);
        }}
      >
        Delete
      </button>
    </section>
  );
};

export default Flashcard;
