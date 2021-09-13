import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReservationForm from "../../components/Home/ReservationForm";
import ReservationTable from "../../components/Home/ReservationTable";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    // The state handles all information/variables you may want to retain
    this.state = {
      levels: [],
      tables: [],
      levelTables: [],
      reservedTables: [],
      schedule: ["Morning", "Evening", "Whole Day"],
      selectedSchedule: "Morning",
      selectedLevel: 1,
      selectedTable: 1,
      selectedDate: new Date()
    };
  }

  // Activates after all the elements of the page is rendered correctly
  componentDidMount() {
    this.initialize();
  }

  initialize() {
    fetch("./test-data.json").then(response => response.json()).then(data => {
      let date = new Date();
      let dateString = date.toLocaleString("en-US", {
        timeZone: "Europe/Amsterdam"
      });
      let selectedDate = new Date(dateString);

      this.setState(
        {
          levels: data.levels,
          tables: data.tables,
          reservedTables: data.reservedTables,
          selectedDate: selectedDate
        },
        () => {
          this.getLevelTables(this.state.levels[0]["levelID"]);
        }
      );
    });
  }

  // Filters Tables based by Level ID
  getLevelTables(levelID) {
    let levelTables = [];

    for (let i = 0; i < this.state.tables.length; i++) {
      if (this.state.tables[i]["levelID"] === parseInt(levelID, 10)) {
        levelTables.push(this.state.tables[i]);
      }
    }

    this.setState({ levelTables: levelTables });
  }

  // Handles changes in the floor level dropdown select
  handleLevelChange(event) {
    let levelID = event.target.value;
    this.setState({ selectedLevel: parseInt(levelID, 10) }, () =>
      this.getLevelTables(levelID)
    );
  }

  // Handles changes in the floor level dropdown select
  handleTableChange(event) {
    let selectedTable = event.target.value;
    this.setState({ selectedTable: parseInt(selectedTable, 10) });
  }

  handleDateChange(selectedDate) {
    this.setState({ selectedDate: selectedDate });
  }

  // Handles changes in the floor level dropdown select
  handleScheduleChange(event) {
    let selectedSchedule = event.target.value;
    this.setState({ selectedSchedule: selectedSchedule });
  }

  // Handles changes in the floor level dropdown select
  handleSaveClick(event) {
    event.preventDefault();
    let index = this.state.reservedTables.length;
    let date = new Date(this.state.selectedDate);
    let europeDate = date.toLocaleString("en-US", {
      timeZone: "Europe/Amsterdam"
    });
    let reservation = {
      reserveID: index,
      levelID: this.state.selectedLevel,
      tableID: this.state.selectedTable,
      date: europeDate,
      schedule: this.state.selectedSchedule
    };

    this.setState({
      reservedTables: [...this.state.reservedTables, reservation]
    });
  }

  render() {
    console.log(
      `STATE VALUES: ${this.state.selectedLevel} ${this.state
        .selectedTable} ${this.state.selectedDate} ${this.state.selectedSchedule}`
    );

    return (
      <div className="page-home">
        <Container>
          <ReservationForm
            // Passes all state variables to child component
            {...this.state}
            handleLevelChange={this.handleLevelChange.bind(this)}
            handleTableChange={this.handleTableChange.bind(this)}
            handleDateChange={this.handleDateChange.bind(this)}
            handleScheduleChange={this.handleScheduleChange.bind(this)}
            handleSaveClick={this.handleSaveClick.bind(this)}
          />
          <ReservationTable
            // Passes all state variables to child component
            {...this.state}
          />
        </Container>
      </div>
    );
  }
}

export default Home;
