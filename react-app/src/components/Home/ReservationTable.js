import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ConfirmDelete from "./ConfirmDelete";

function ReservationTable({
  reservationList,
  showModal,
  handleDeleteSuccess,
  handleShowModal
}) {
  const [reservation, setReservation] = useState([]);

  function handleDelete(reservation) {
    setReservation(reservation);
    handleShowModal(true);
  }

  return (
    <React.Fragment>
      <Table striped bordered className="mt-5" variant="light">
        <thead>
          <tr>
            <th className="text-center">Office</th>
            <th className="text-center">Desk</th>
            <th>Schedule</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <ReservationList
            reservationList={reservationList}
            handleDelete={handleDelete}
          />
        </tbody>
      </Table>
      <ConfirmDelete
        reservation={reservation}
        handleDeleteSuccess={handleDeleteSuccess}
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
    </React.Fragment>
  );
}

const ReservationList = ({ reservationList, handleDelete }) =>
  reservationList.length > 0
    ? reservationList.map(reservation =>
        <tr key={reservation.id}>
          <td className="text-center">
            Office {reservation.office}
          </td>
          <td className="text-center">
            Desk {reservation.desk}
          </td>
          <td>
            {reservation.schedule},{" "}
            <TimeOfDay timeOfDay={reservation.timeOfDay} />
          </td>
          <td className="text-center">
            <Button variant="danger" onClick={() => handleDelete(reservation)}>
              Delete
            </Button>
          </td>
        </tr>
      )
    : <tr>
        <td colSpan={4}>No Reservations</td>
      </tr>;

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

export default ReservationTable;
