import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import FORM from "./Form";
import "./style.scss";

class Login extends Component {
  funcLogin = (email, password) => {};

  render() {
    return (
      <div className="login-page">
        <Container>
          <Card>
            <Card.Body>
              <h3>Sign In</h3>
              <FORM funcLogin={this.funcLogin.bind(this)} />
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Login;
