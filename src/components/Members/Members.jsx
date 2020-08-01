import React, { Component } from "react";
import "./style.scss";
import { Container, Col, Row, Table } from "react-bootstrap";
import Data from "../data/Test JSON.json";
import ActivePeriodModal from "./ActivityPeriods";

export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity_modal: 0,
    };
  }

  activityPeriods = (value) => {
    this.setState({ activity_modal: value });
  };

  getActivityPeriodDate = () => {
    return (
      <Table>
        <tr>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
        {Data.members[0].activity_periods.map((period, id) => (
          <tr key={id}>
            <td>{period.start_time}</td>
            <td>{period.end_time}</td>
          </tr>
        ))}
      </Table>
    );
  };

  render() {
    return (
      <>
        <Container className="members_details">
          <i>click on user name for activity periods</i>
          {
            <Col>
              {Data.members.map((user, id) => (
                <div key={user.id}>
                  <Row className="user_detail">
                    <p>{user.id}</p>
                    <a href="#" onClick={() => this.activityPeriods(user.id)}>
                      {user.real_name}
                    </a>
                    <p>{user.tz}</p>
                  </Row>
                  <Col key={id}>
                    <ActivePeriodModal
                      show={this.state.activity_modal === user.id}
                      onHide={this.activityPeriods}
                      getActivityPeriodDate={this.getActivityPeriodDate()}
                      name={user.real_name}
                    />
                  </Col>
                </div>
              ))}
            </Col>
          }
        </Container>
      </>
    );
  }
}
