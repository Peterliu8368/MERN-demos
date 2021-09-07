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
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <button onClick={handleFetchClick}>Fetch</button>

      {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default App;
