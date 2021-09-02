import React, { useState } from "react";

import "./App.css";
import flashcardsData from "./flashcards.json";

function App() {
  /* 
    useState returns an array of 2 items that are destructured.
    firstItem is the current state data, secondItem is a function used to pass
    in updated state data. Never mutate the current state var directly.
  */
  //    [firstItem, secondItem]     = useState(startingData);
  const [flashcards, setFlashcards] = useState(flashcardsData);

  const handleFlashcardClick = (selectedIdx) => {
    /* 
    When updating state that is an object or array, we need to create a BRAND
    NEW object / array containing the updated data and send it to the set state
    function.
    */

    const updatedFlashcards = flashcards.map((card, i) => {
      if (i === selectedIdx) {
        // Reverse flipped.
        card.flipped = !card.flipped;
      }
      return card;
    });

    setFlashcards(updatedFlashcards);
  };

  return (
    <div className="container">
      <header style={{ textAlign: "center" }}>
        <h1>Programming Flash Cards</h1>
        <hr />
      </header>
      <main className="flex-row flex-wrap">
        {flashcards.map((flashcard, i) => {
          return (
            <section
              key={i}
              className="card"
              onClick={(event) => {
                handleFlashcardClick(i);
              }}
            >
              <h3>{flashcard.category}</h3>

              {flashcard.flipped === true ? ( // if true
                <p>{flashcard.back}</p> // do this
              ) : (
                // else
                <p>{flashcard.front}</p> // do this
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
