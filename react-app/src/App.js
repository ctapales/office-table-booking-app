import React, { useEffect, useState } from "react";
import "./App.scss";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState(null);
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(
    () => {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUser(user);
      }
    },
    [authenticate]
  );

  function handleAuthentication() {
    setAuthenticate(true);
  }

  return (
    <div className="App">
      <React.Fragment>
        {user !== null
          ? <Home />
          : <Login handleAuthentication={handleAuthentication} />}
      </React.Fragment>
    </div>
  );
}

export default App;
