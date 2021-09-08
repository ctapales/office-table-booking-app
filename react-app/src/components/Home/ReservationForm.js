import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

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

function ReservationForm(props) {
  return (
    <Card className="reservation-form">
      <Card.Body>
        <Form className="home-form">
          <Row>
            <Col xs={5}>
              <Form.Group className="form-group">
                <Form.Label>Choose Floor</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={props.handleLevelChange.bind(this)}
                >
                  <FloorLevelOptions {...props} />
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={5}>
              <Form.Group className="form-group">
                <Form.Label>Choose Table</Form.Label>
                <Form.Select aria-label="Default select example">
                  <TableOptions {...props} />
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={2}>
              <Form.Group className="form-group btn">
                <Button variant="primary" type="submit">
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
