import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReservationForm from "../../components/Home/ReservationForm";
import "./style.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: [],
      tables: [],
      levelTables: []
    };
  }

  componentDidMount() {
    this.initialize();
  }

  initialize() {
    fetch("./test-data.json").then(response => response.json()).then(data => {
      this.setState(
        {
          levels: data.levels,
          tables: data.tables
        },
        () => {
          this.getLevelTables(this.state.levels[0]["levelID"]);
        }
      );
    });
  }

  handleLevelChange(event) {
    let levelID = event.target.value;
    this.getLevelTables(levelID);
  }

  getLevelTables(levelID) {
    let levelTables = [];

    this.state.tables.forEach(table => {
      if (table["levelID"] === parseInt(levelID, 10)) {
        levelTables.push(table);
      }
    });

    this.setState({ levelTables: levelTables });
  }

  fetchTablesByFloorID() {}

  render() {
    return (
      <div className="page-home">
        <Container>
          <ReservationForm
            {...this.state}
            handleLevelChange={this.handleLevelChange.bind(this)}
          />
        </Container>
      </div>
    );
  }
}

export default Home;
