import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    this.setState({user: null})
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          {this.state.user ? <Home /> : <Login />}
        </React.Fragment>
      </div>
    );
  }
}

export default App;
