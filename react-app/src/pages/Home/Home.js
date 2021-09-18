import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReservationForm from "../../components/Home/ReservationForm";
import ReservationTable from "../../components/Home/ReservationTable";
import axios from "axios";
import "./style.scss";

export default function Home1() {
  const [schedule, setSchedule] = useState(new Date());
  const [reservationList, setReservationList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const user = localStorage.getItem('user');

  useEffect(() => {
    handleScheduleChange(new Date());
  }, []);

  useEffect(
    () => {
      if (user !== undefined && user.id !== undefined) {
        let newSchedule = formatSchedule(schedule);
        axios
          .get(
            `http://localhost:8080/user/${user.id}/reservations/${newSchedule}`
          )
          .then(response => {
            setReservationList(response.data);
          });
      }
    },
    
    [user, showModal, schedule]
  );

  function handleScheduleChange(schedule) {
    setSchedule(new Date(schedule));
  }

  function handleShowModal(value) {
    setShowModal(value);
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
    <div className="page-home">
      <Container>
        <ReservationForm
          user={user.id}
          schedule={schedule}
          reservationList={reservationList}
          showModal={showModal}
          handleShowModal={handleShowModal}
          handleScheduleChange={handleScheduleChange}
        />
        <ReservationTable reservationList={reservationList} />
      </Container>
    </div>
  );
}
