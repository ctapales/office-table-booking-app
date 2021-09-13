import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReservationForm1 from "../../components/Home/ReservationForm1";

export default function Home1() {
  const [schedule, setSchedule] = useState(new Date());

  useEffect(() => {
    let date = new Date(schedule);
    let europeDate = date.toLocaleString("en-US", {
      timeZone: "Europe/Amsterdam"
    });
    setSchedule(new Date(europeDate));
  }, []);

  function handleScheduleChange(schedule) {
    let date = new Date(schedule);
    let europeDate = date.toLocaleString("en-US", {
      timeZone: "Europe/Amsterdam"
    });
    setSchedule(new Date(schedule));
  }

  return (
    <div className="page-home">
      <Container>
        <ReservationForm1
          schedule={schedule}
          handleScheduleChange={handleScheduleChange}
        />
      </Container>
    </div>
  );
}
