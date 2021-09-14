import React from "react";
import { Table } from "react-bootstrap";

function ReservationTable({ reservationList }) {
  return (
    <Table striped bordered className="mt-5" variant="light">
      <thead>
        <tr>
          <th>Office</th>
          <th>Desk</th>
          <th>Schedule</th>
        </tr>
      </thead>
      <tbody>
        <ReservationList reservationList={reservationList} />
      </tbody>
    </Table>
  );
}

const ReservationList = ({ reservationList }) =>
  reservationList.length > 0
    ? reservationList.map(reservation =>
        <tr key={reservation.id}>
          <td>
            Office {reservation.office}
          </td>
          <td>
            Desk {reservation.desk}
          </td>
          <td>
            {reservation.schedule},{" "}
            <TimeOfDay timeOfDay={reservation.timeOfDay} />
          </td>
        </tr>
      )
    : <tr><td colSpan={3}>No Reservations</td></tr>;

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

export default ReservationTable;
