import React, { useEffect, useState } from "react";
import { Form, Button, Row, Card, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import axios from "axios";

function ReservationForm1({ schedule, handleScheduleChange }) {
  const [officeList, setOfficeList] = useState([]);
  const [desk, setDesk] = useState(1);
  const [deskList, setDeskList] = useState([]);
  const [reservedTimeOfDayList, setReservedTimeOfDayList] = useState([]);
  const [timeOfDay, setTimeOfDay] = useState("MORNING");

  useEffect(() => {
    axios.get(`http://localhost:8080/office/getAllOffice`).then(response => {
      setOfficeList(response.data);
    });
  }, []);

  useEffect(
    () => {
      if (officeList.length > 0) {
        const id = officeList[0].id;
        axios.get(`http://localhost:8080/office/${id}/desks`).then(response => {
          setDeskList(response.data);
        });
      }
    },
    [officeList]
  );

  useEffect(
    () => {
      const newSchedule = formatSchedule(schedule);
      axios
        .get(`http://localhost:8080/desk/${desk}/reservations/${newSchedule}`)
        .then(response => {
          setReservedTimeOfDayList(
            response.data.map(reservation => reservation.timeOfDay)
          );
        });
    },
    [officeList, desk, schedule]
  );

  function handleOfficeChange(event) {
    axios
      .get(`http://localhost:8080/office/${event.target.value}/desks`)
      .then(response => {
        setDeskList(response.data);
      });
  }

  function handleDeskChange(event) {
    setDesk(event.target.value);
  }

  function handleTimeOfDayChange(event) {
    setTimeOfDay(event.target.value);
  }

  function createNewReservation() {}

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
    <div className="page-home">
      <Card className="reservation-form">
        <Card.Body>
          <Form className="home-form">
            <Row>
              <Col xs={3}>
                <Form.Group className="form-group">
                  <Form.Label>Select Floor</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={handleOfficeChange}
                  >
                    <OfficeOptions officeList={officeList} />
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group className="form-group">
                  <Form.Label>Select Table</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={handleDeskChange}
                  >
                    <DeskOptions deskList={deskList} />
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group className="form-group">
                  <Form.Label>Select Date</Form.Label>
                  <DatePicker
                    className="form-control"
                    selected={schedule}
                    minDate={new Date()}
                    onChange={handleScheduleChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group className="form-group">
                  <Form.Label>Select Schedule</Form.Label>
                  <Form.Select
                    defaultValue={timeOfDay}
                    aria-label="Default select example"
                    onChange={handleTimeOfDayChange}
                  >
                    <TimeOfDayOptions
                      reservedTimeOfDayList={reservedTimeOfDayList}
                    />
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group className="form-group btn">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={createNewReservation}
                  >
                    Save
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

const OfficeOptions = ({ officeList }) =>
  officeList.map((office, index) =>
    <option key={index} value={office.id}>
      Office {office.number}
    </option>
  );

const DeskOptions = ({ deskList }) =>
  deskList.map((desk, index) =>
    <option key={index} value={desk.id}>
      Desk {desk.number}
    </option>
  );

const TimeOfDayOptions = ({ reservedTimeOfDayList }) => {
  const timeOfDay = ["MORNING", "AFTERNOON", "WHOLE_DAY"];
  let options = [];

  for (let i = 0; i < timeOfDay.length; i++) {
    if (reservedTimeOfDayList.includes(timeOfDay[i])) {
      continue;
    }

    let time = "";

    switch (timeOfDay[i]) {
      case "MORNING": {
        time = "Morning";
        break;
      }
      case "AFTERNOON": {
        time = "Afternoon";
        break;
      }
      case "WHOLE_DAY": {
        time = "Whole Day";
        break;
      }
      default: {
        break;
      }
    }

    options.push(
      <option key={i} value={timeOfDay[i]}>
        {time}
      </option>
    );
  }

  return options;
};

export default ReservationForm1;
