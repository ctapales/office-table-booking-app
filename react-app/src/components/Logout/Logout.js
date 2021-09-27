import React from "react";
import { Button } from "react-bootstrap";
import ConfirmLogout from "../Home/ConfirmLogout";

function Logout({ showModal, handleShowModal, handleAuthentication }) {
  function handleLogout() {
    handleShowModal(true);
  }

  return (
    <div className="logout">
      <Button variant="secondary" type="submit" onClick={handleLogout}>
        Logout
      </Button>
      <ConfirmLogout
        handleAuthentication={handleAuthentication}
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
    </div>
  );
}

export default Logout;
