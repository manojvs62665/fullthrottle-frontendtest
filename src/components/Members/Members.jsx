import React, { Component } from "react";
import "./style.scss";
import { Container, Col, Row } from "react-bootstrap";
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

  render() {
    return (
      <>
        <Container className="members_details">
          {
            <Col>
              {Data.members.map((user, id) => (
                <div key={user.id}>
                  <Col>
                    <Row className="user_detail">
                      <p>{user.id}</p>
                      <a href="#" onClick={() => this.activityPeriods(user.id)}>
                        {user.real_name}
                      </a>
                      <p>{user.tz}</p>
                    </Row>
                  </Col>
                  {Data.members[0].activity_periods.map((period, id) => {
                    return (
                      <Col key={id}>
                        start_time={period.start_time}
                        <ActivePeriodModal
                          show={this.state.activity_modal === user.id}
                          onHide={this.activityPeriods}
                          start_time={period.start_time}
                          end_time={period.end_time}
                          name={user.real_name}
                        />
                      </Col>
                    );
                  })}
                </div>
              ))}
            </Col>
          }
        </Container>
      </>
    );
  }
}
