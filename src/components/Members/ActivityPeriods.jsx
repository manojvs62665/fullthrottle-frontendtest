import React, { Component } from "react";
import "./style.scss";
import { Container, Modal, Table } from "react-bootstrap";

export default class ActivityPeriods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_time: this.props.start_time,
      end_time: this.props.end_time,
    };
  }

  render() {
    return (
      <>
        <div className="members_details">
          <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton className="">
              <Modal.Title>Activity Periods</Modal.Title>
            </Modal.Header>
            <h4 className="user_name">{this.props.name}</h4>
            <Modal.Body>
              <Table>
                <tr>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
                <tr>
                  <td>{this.state.start_time}</td>
                  <td>{this.state.end_time}</td>
                </tr>
              </Table>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}
