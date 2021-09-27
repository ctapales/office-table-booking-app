import React from "react";
import { Button, Modal } from "react-bootstrap";

function ConfirmLogout({ showModal, handleAuthentication, handleShowModal }) {
  function handleConfirm(event) {
    localStorage.setItem("user", null);
    handleAuthentication();
    handleShowModal(false);
  }

  function handleCancel() {
    handleShowModal(false);
  }

  return (
    <React.Fragment>
      <Modal
        show={showModal}
        onHide={handleCancel}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to proceed?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            No
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ConfirmLogout;
