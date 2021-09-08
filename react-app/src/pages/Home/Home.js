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
      schedule: ["Half", "Full"]
    };
  }

  // Activates after all the elements of the page is rendered correctly
  componentDidMount() {
    this.initialize();
  }

  initialize() {
    fetch("./test-data.json").then(response => response.json()).then(data => {
      this.setState(
        {
          levels: data.levels,
          tables: data.tables,
          reservedTables: data.reservedTables
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
    this.getLevelTables(levelID);
  }

  render() {
    console.log(`STATE VALUES: ${this.state}`);

    return (
      <div className="page-home">
        <Container>
          <ReservationForm
            // Passes all state variables to child component
            {...this.state}
            // Passes/Binds this.handleLevelChange as handleLevelChange to child component
            handleLevelChange={this.handleLevelChange.bind(this)}
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
