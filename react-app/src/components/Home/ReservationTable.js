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

function FormatDate(reservedDate) {
  let date = new Date(reservedDate);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);

  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
}

function TableBody(props) {
  let row = [];

  for (let i = 0; i < props["reservedTables"].length; i++) {
    let levelName = GetLevel(props["reservedTables"][i]["levelID"], props);
    let tableName = GetTable(props["reservedTables"][i]["tableID"], props);
    let timeBooked = FormatDate(props["reservedTables"][i]["date"]);

    row.push(
      <tr>
        <td>
          {levelName}
        </td>
        <td>
          {tableName}
        </td>
        <td>
          {timeBooked}
        </td>
      </tr>
    );
  }

  return row;
}

function ReservationTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Floor</th>
          <th>Table</th>
          <th>Time Booked</th>
        </tr>
      </thead>
      <tbody>
        <TableBody {...props} />
      </tbody>
    </Table>
  );
}

export default ReservationTable;
