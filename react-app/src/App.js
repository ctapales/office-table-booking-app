// import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/user/getUserById/1`).then(response => {
      setUser(response.data);
    });
  }, []);

  return (
    <div className="App">
      <React.Fragment>
        {/* {this.state.user ? <Home /> : <Login />} */}
        <Home user={user} />
      </React.Fragment>
    </div>
  );
}

export default App;
