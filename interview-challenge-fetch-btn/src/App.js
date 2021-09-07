import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import UsersTable from "./components/UsersTable";
import DisplayError from "./components/Error";

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchClick = (e) => {
    setLoading(true);

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
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  const fetchBtnText = users ? "Refresh User Data" : "Fetch Users";

  // If this were a larger project, I would use a CSS-in-js library instead of inline-styles.
  return (
    <div style={{ maxWidth: "85%", margin: "0 auto" }}>
      {loading ? (
        <img
          src="https://i.gifer.com/ZZ5H.gif"
          alt="Loading"
          height="40px"
          width="40px"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        />
      ) : (
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
      )}

      <DisplayError error={error} />
      <UsersTable users={users} />
    </div>
  );
}

export default App;
