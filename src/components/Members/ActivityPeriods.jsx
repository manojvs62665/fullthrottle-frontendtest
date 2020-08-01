import React, { Component } from "react";
import "./style.scss";
import { Container, Modal, Table } from "react-bootstrap";

export default class ActivityPeriods extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <Modal.Body>{this.props.getActivityPeriodDate}</Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}
