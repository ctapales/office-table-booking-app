import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReservationForm from "../../components/Home/ReservationForm";
import ReservationTable from "../../components/Home/ReservationTable";
import axios from "axios";
import "./style.scss";
import authHeader from "../../services/auth-header";
import Logout from "../../components/Logout/Logout";

function Home({handleAuthentication}) {
  const [schedule, setSchedule] = useState(new Date());
  const [reservationList, setReservationList] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    handleScheduleChange(new Date());
  }, []);

  useEffect(
    () => {
      if (user !== undefined && user.id !== undefined) {
        let newSchedule = formatSchedule(schedule);
        axios
          .get(
            `http://localhost:8080/user/${user.id}/reservations/${newSchedule}`,
            { headers: authHeader() }
          )
          .then(response => {
            setReservationList(response.data);
          });
      }
    },
    [user, showSaveModal, showDeleteModal, schedule]
  );

  function handleScheduleChange(schedule) {
    setSchedule(new Date(schedule));
  }

  function handleShowSaveModal(value) {
    setShowSaveModal(value);
  }

  function handleShowDeleteModal(value) {
    setShowDeleteModal(value);
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
        <Logout handleAuthentication={handleAuthentication}/>
        <ReservationForm
          user={user.id}
          schedule={schedule}
          reservationList={reservationList}
          showModal={showSaveModal}
          handleShowModal={handleShowSaveModal}
          handleScheduleChange={handleScheduleChange}
        />
        <ReservationTable
          reservationList={reservationList}
          showModal={showDeleteModal}
          handleShowModal={handleShowDeleteModal}
        />
      </Container>
    </div>
  );
}

export default Home;