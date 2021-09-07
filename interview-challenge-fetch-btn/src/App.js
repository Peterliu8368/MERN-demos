import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import { setDefaultHandler } from "workbox-routing";

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchClick = (e) => {
    // call api
    // fetch("http://httpstat.us/404")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        return resp.json();
      })
      .then((resData) => {
        setUsers(resData);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const fetchBtnText = users ? "Refresh User Data" : "Fetch Users";

  // If this were a larger project, I would use a CSS-in-js library instead of inline-styles.
  return (
    <div style={{ maxWidth: "85%", margin: "0 auto" }}>
      <button
        onClick={handleFetchClick}
        style={{
          padding: 5,
          fontSize: 22,
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {fetchBtnText}
      </button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default App;
