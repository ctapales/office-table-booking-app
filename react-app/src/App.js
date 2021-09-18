import React, { useEffect, useState } from "react";
import "./App.scss";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log(user.id);
      setUser(user);
    }
  }, []);

  return (
    <div className="App">
      <React.Fragment>
        {user !== null ? <Home /> : <Login />}
      </React.Fragment>
    </div>
  );
}

export default App;
