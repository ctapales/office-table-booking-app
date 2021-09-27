import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReservationForm from "../../components/Home/ReservationForm";
import ReservationTable from "../../components/Home/ReservationTable";
import axios from "axios";
import "./style.scss";
import authHeader from "../../services/auth-header";
import Logout from "../../components/Logout/Logout";
import * as API from "../../services/api";

function Home({ handleAuthentication }) {
  const [schedule, setSchedule] = useState(new Date());
  const [reservationList, setReservationList] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    handleScheduleChange(new Date());
  }, []);

  useEffect(
    () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user !== undefined && user.id !== undefined) {
        let newSchedule = formatSchedule(schedule);
        axios
          .get(`${API.URL}/user/${user.id}/reservations/${newSchedule}`, {
            headers: authHeader()
          })
          .then(response => {
            setReservationList(response.data);
          });
      }
    },
    [schedule, saveSuccess, deleteSuccess]
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

  function handleShowLogoutModal(value) {
    setShowLogoutModal(value);
  }

  function handleSaveSuccess() {
    setSaveSuccess(!saveSuccess);
  }

  function handleDeleteSuccess() {
    setDeleteSuccess(!deleteSuccess);
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
        <Logout
          showModal={showLogoutModal}
          handleShowModal={handleShowLogoutModal}
          handleAuthentication={handleAuthentication}
        />
        <ReservationForm
          schedule={schedule}
          reservationList={reservationList}
          showModal={showSaveModal}
          saveSuccess={saveSuccess}
          handleShowModal={handleShowSaveModal}
          handleSaveSuccess={handleSaveSuccess}
          handleScheduleChange={handleScheduleChange}
        />
        <ReservationTable
          reservationList={reservationList}
          showModal={showDeleteModal}
          handleDeleteSuccess={handleDeleteSuccess}
          handleShowModal={handleShowDeleteModal}
        />
      </Container>
    </div>
  );
}

export default Home;
