import React, { useState } from "react";

import "./App.css";
import flashcardsData from "./flashcards.json";

import DisplayFormData from "./components/DisplayFormData";
import Flashcard from "./components/Flashcard";

function App() {
  /* 
    useState returns an array of 2 items that are destructured.
    firstItem is the current state data, secondItem is a function used to pass
    in updated state data. Never mutate the current state var directly.
  */
  //    [firstItem, secondItem]     = useState(startingData);
  const [flashcards, setFlashcards] = useState(flashcardsData);

  // Form State
  const [category, setCategory] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleFlashcardClick = (cardToFlip) => {
    /* 
    When updating state that is an object or array, we need to create a BRAND
    NEW object / array containing the updated data and send it to the set state
    function.
    */

    const updatedFlashcards = flashcards.map((card) => {
      if (card === cardToFlip) {
        // Reverse flipped.
        card.flipped = !card.flipped;
      }
      return card;
    });

    setFlashcards(updatedFlashcards);
  };

  const handleNewFlashcardSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      // keyName: value
      category: category,
      front: front,
      back: back,
    };

    // new array with newCard at start and the rest after.
    const updatedFlashcards = [newCard, ...flashcards];
    // When updating an array or object we must provide brand new array / obj.
    setFlashcards(updatedFlashcards);

    setCategory("");
    setFront("");
    setBack("");
  };

  const handleFlashcardDelete = (event, cardToDelete) => {
    /* 
    B/c this button is inside of a card that already has a click event on it,
    when we click the event "bubbles" up to the onClick that is on the card
    preventing this delete from happening. So we need to stop the event from
    "propagating" to allow this delete to happen. When the delete didn't work
    we could see the flashcard was still flipping over so we looked up
    "js click on child not parent" and found the answer.
    */
    event.stopPropagation();

    const filteredFlashcards = flashcards.filter((card) => {
      // return true to keep the item, false to not keep the item.
      return cardToDelete !== card;
    });

    setFlashcards(filteredFlashcards);
  };

  const disableSubmitButton = !category || !front || !back;

  return (
    <div className="container">
      <header style={{ textAlign: "center" }}>
        <h1>Programming Flash Cards</h1>
        <hr />
      </header>

      <DisplayFormData category={category} front={front} back={back} />

      <form
        onSubmit={(e) => {
          handleNewFlashcardSubmit(e);
        }}
      >
        <div>
          <label>Category: </label>
          <input
            id="test"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            type="text"
            value={category}
          />
        </div>

        <div>
          <label>Front: </label>
          <input
            onChange={(e) => {
              setFront(e.target.value);
            }}
            type="text"
            value={front}
          />
        </div>

        <div>
          <label>Back: </label>
          <input
            onChange={(e) => {
              setBack(e.target.value);
            }}
            type="text"
            value={back}
          />
        </div>

        <button disabled={disableSubmitButton}>Add Card</button>
      </form>

      <main className="flex-row flex-wrap">
        {flashcards.map((flashcard, i) => {
          return (
            <Flashcard
              key={i}
              card={flashcard}
              handleFlashcardClick={handleFlashcardClick}
              handleFlashcardDelete={handleFlashcardDelete}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
