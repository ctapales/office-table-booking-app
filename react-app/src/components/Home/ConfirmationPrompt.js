import React from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

function ConfirmationPrompt({
  showModal,
  schedule,
  timeOfDay,
  user,
  desk,
  handleShowModal
}) {
  function handleConfirm(event) {
    let newSchedule = formatSchedule(schedule);
    let newReservation = {
      schedule: newSchedule,
      timeOfDay: timeOfDay,
      userid: user,
      deskid: desk
    };

    axios
      .post(`http://localhost:8080/reservation/saveReservation`, newReservation)
      .then(response => handleShowModal(false));
  }

  function handleCancel() {
    handleShowModal(false);
  }

  function formatSchedule(schedule) {
    let date = new Date(schedule);
    let europeDate = date.toLocaleString("en-US", {
      timeZone: "Europe/Amsterdam"
    });
    let newDate = new Date(europeDate);

    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let day = ("0" + newDate.getDate()).slice(-2);
    let year = newDate.getFullYear();

    return `${month}.${day}.${year}`;
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
          <Modal.Title>Reservation Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Reservation Details</b>
          </p>
          <p>
            Reserving Desk {desk} on {formatSchedule(schedule)}, {" "}
            <TimeOfDay timeOfDay={timeOfDay} />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirm}>
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
      break;
    }
  }
};

export default ConfirmationPrompt;
