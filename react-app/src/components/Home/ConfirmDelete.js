import React from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import * as API from "../../services/api";
import authHeader from "../../services/auth-header";

function ConfirmDelete({
  reservation,
  showModal,
  handleDeleteSuccess,
  handleShowModal
}) {
  function handleConfirm(event) {
    axios
      .delete(`${API.URL}/reservation/${reservation.id}/deleteReservation`, {
        headers: authHeader()
      })
      .then(response => {
        handleDeleteSuccess();
        handleShowModal(false);
      })
      .catch(error => {
        handleDeleteSuccess();
        handleShowModal(false);
      });
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
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Reservation Details</b>
          </p>
          <p>
            Deleting Desk {reservation.desk} on {reservation.schedule}, ,{" "}
            <TimeOfDay timeOfDay={reservation.timeOfDay} />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

const TimeOfDay = ({ timeOfDay }) => {
  switch (timeOfDay) {
    case "MORNING": {
      return "Morning (Until 12:00 PM)";
    }
    case "AFTERNOON": {
      return "Afternoon (Until 04:00 PM)";
    }
    case "WHOLE_DAY": {
      return "Whole Day (Until 04:00 PM)";
    }
    default: {
      return null;
    }
  }
};

export default ConfirmDelete;
