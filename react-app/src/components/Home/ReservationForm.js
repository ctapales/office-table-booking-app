import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";

function FloorLevelOptions(props) {
  let options = [];

  for (let i = 0; i < props["levels"].length; i++) {
    options.push(
      <option key={i} value={props["levels"][i]["levelID"]}>
        {props["levels"][i]["name"]}
      </option>
    );
  }

  return options;
}

function TableOptions(props) {
  let options = [];

  for (let i = 0; i < props["levelTables"].length; i++) {
    options.push(
      <option key={i} value={props["levelTables"][i]["tableID"]}>
        {props["levelTables"][i]["name"]}
      </option>
    );
  }

  return options;
}

function ScheduleOptions(props) {
  let options = [];
  for (let i = 0; i < props["schedule"].length; i++) {
    options.push(
      <option key={i} value={props["schedule"][i]}>
        {props["schedule"][i]}
      </option>
    );
  }
  return options;
}

function ReservationForm(props) {
  return (
    <Card className="reservation-form">
      <Card.Body>
        <Form className="home-form">
          <Row>
            <Col xs={3}>
              <Form.Group className="form-group">
                <Form.Label>Select Floor</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={props.handleLevelChange.bind(this)}
                >
                  <FloorLevelOptions {...props} />
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={3}>
              <Form.Group className="form-group">
                <Form.Label>Select Table</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={props.handleTableChange.bind(this)}
                >
                  <TableOptions {...props} />
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group className="form-group">
                <Form.Label>Select Date</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={props.selectedDate}
                  onChange={props.handleDateChange.bind(this)}
                />
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group className="form-group">
                <Form.Label>Select Schedule</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={props.handleScheduleChange.bind(this)}
                >
                  <ScheduleOptions {...props} />
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group className="form-group btn">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={props.handleSaveClick.bind(this)}
                >
                  Save
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ReservationForm;
