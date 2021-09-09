import React from "react";
import { Table } from "react-bootstrap";

function GetLevel(levelID, props) {
  for (let i = 0; i < props["levels"].length; i++) {
    if (props["levels"][i]["levelID"] === levelID) {
      return props["levels"][i]["name"];
    }
  }

  return;
}

function GetTable(tableID, props) {
  for (let i = 0; i < props["tables"].length; i++) {
    if (props["tables"][i]["tableID"] === tableID) {
      return props["tables"][i]["name"];
    }
  }

  return;
}

function FormatDate(date) {
  let newDate = new Date(date);
  let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  let day = ("0" + (newDate.getDate() + 1)).slice(-2);
  let year = newDate.getFullYear();

  return `${month}/${day}/${year}`;
}

function FormatSchedule(schedule) {
  let suffix = schedule === "Morning" ? "(Until 12:00 PM)" : "(Until 04:00 PM)"

  return `${schedule} ${suffix}`;
}

function TableBody(props) {
  let row = [];

  for (let i = 0; i < props["reservedTables"].length; i++) {
    if(props.selectedLevel !== props["reservedTables"][i]["levelID"]) {
      continue;
    }
    let level = GetLevel(props["reservedTables"][i]["levelID"], props);
    let table = GetTable(props["reservedTables"][i]["tableID"], props);
    let date = FormatDate(props["reservedTables"][i]["date"]);
    let schedule = FormatSchedule(props["reservedTables"][i]["schedule"])

    row.push(
      <tr key={i}>
        <td>
          {level}
        </td>
        <td>
          {table}
        </td>
        <td>
          {date}, {schedule}
        </td>
      </tr>
    );
  }

  return row;
}

function ReservationTable(props) {
  return (
    <Table striped bordered hover className="mt-5">
      <thead>
        <tr>
          <th>Floor</th>
          <th>Table</th>
          <th>Schedule</th>
        </tr>
      </thead>
      <tbody>
        <TableBody {...props} />
      </tbody>
    </Table>
  );
}

export default ReservationTable;
