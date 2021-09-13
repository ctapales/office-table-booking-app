// import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import React, { Component } from "react";
import "./App.scss";
import Home1 from "./pages/Home/Home1";

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
         {/* {this.state.user ? <Home /> : <Login />} */}
         <Home1></Home1>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
