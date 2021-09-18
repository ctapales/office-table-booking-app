import React, { useEffect, useState } from "react";
import { Form, Button, Row, Card, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import ConfirmationPrompt from "../Home/ConfirmationPrompt";
import * as API from './../../services/api';

function ReservationForm({
  user,
  schedule,
  reservationList,
  showModal,
  handleShowModal,
  handleScheduleChange
}) {
  const [officeList, setOfficeList] = useState([]);
  const [desk, setDesk] = useState(1);
  const [deskList, setDeskList] = useState([]);
  const [reservedTimeOfDayList, setReservedTimeOfDayList] = useState([]);
  const [timeOfDay, setTimeOfDay] = useState("MORNING");

  useEffect(() => {
    axios.get(`${API.URL}/office/getAllOffice`).then(response => {
      setOfficeList(response.data);
    });
  }, []);

  useEffect(
    () => {
      if (officeList.length > 0) {
        const id = officeList[0].id;
        axios.get(`${API.URL}/office/${id}/desks`).then(response => {
          setDeskList(response.data);
        });
      }
    },
    [officeList]
  );

  useEffect(
    () => {
      if (deskList.length > 0) {
        setDesk(deskList[0].id);
      }
    },
    [deskList]
  );

  useEffect(
    () => {
      let newSchedule = formatSchedule(schedule);
      axios
        .get(`${API.URL}/desk/${desk}/reservations/${newSchedule}`)
        .then(response => {
          setReservedTimeOfDayList(
            response.data.map(reservation => reservation.timeOfDay)
          );
        });
    },
    [showModal, desk, schedule, reservationList]
  );

  useEffect(
    () => {
      const timeOfDay = ["MORNING", "AFTERNOON"];
      let selectedValue = "";

      timeOfDay.forEach(time => {
        if (!reservedTimeOfDayList.includes(time) && !selectedValue) {
          selectedValue = time;
        }
      });

      setTimeOfDay(selectedValue);
    },
    [showModal, reservationList, reservedTimeOfDayList]
  );

  function handleOfficeChange(event) {
    axios
      .get(`${API.URL}/office/${event.target.value}/desks`)
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

  function handleReservationClick(event) {
    event.preventDefault();

    handleShowModal(true);
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
                      timeOfDay={timeOfDay}
                    />
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group className="form-group btn">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!timeOfDay ? true : false}
                    onClick={handleReservationClick}
                  >
                    Reserve
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <ConfirmationPrompt
        showModal={showModal}
        schedule={schedule}
        timeOfDay={timeOfDay}
        user={user}
        desk={desk}
        handleShowModal={handleShowModal}
      />
    </React.Fragment>
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

const TimeOfDayOptions = ({ timeOfDay, reservedTimeOfDayList }) => {
  if(!timeOfDay) {
    return <option value="">N/A</option>
  }
  const timeOfDayList = ["MORNING", "AFTERNOON", "WHOLE_DAY"];
  let options = [];

  for (let i = 0; i < timeOfDayList.length; i++) {
    if (reservedTimeOfDayList.includes(timeOfDayList[i])) {
      continue;
    }

    let time = "";

    switch (timeOfDayList[i]) {
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

export default ReservationForm;
