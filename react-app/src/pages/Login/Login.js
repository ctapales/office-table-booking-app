import React from "react";
import { Card, Container } from "react-bootstrap";
import EmailAndPasswordForm from "../../components/Login/EmailAndPasswordForm";
import "./style.scss";

function Login({handleAuthentication}) {
  return (
    <div className="login-page">
      <Container>
        <Card>
          <Card.Body>
            <h3>Sign In</h3>
            <EmailAndPasswordForm handleAuthentication={handleAuthentication}/>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
