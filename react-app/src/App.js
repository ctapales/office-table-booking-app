import React, { useEffect, useState } from "react";
import "./App.scss";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import axios from "axios";
import * as API from "./services/api";
import authHeader from "./services/auth-header";

function App() {
  const [user, setUser] = useState(null);
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  function fetchUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setUser(user);
      setAuthenticate(true);
      return;
    }
    console.log(user.jwt);
    axios
      .get(`${API.URL}/user/getUserById/${user.id}`, {
        headers: authHeader()
      })
      .then(response => {
        setUser(user);
        setAuthenticate(true);
      })
      .catch(error => {
        setUser(null);
        setAuthenticate(true);
      });
  }

  function handleAuthentication() {
    fetchUser();
  }

  return (
    <div className="App">
      <React.Fragment>
        {authenticate
          ? <React.Fragment>
              {user
                ? <Home handleAuthentication={handleAuthentication}/>
                : <Login handleAuthentication={handleAuthentication} />}
            </React.Fragment>
          : null}
      </React.Fragment>
    </div>
  );
}

export default App;
