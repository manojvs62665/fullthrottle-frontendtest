import React, { Component } from "react";
import "./home.scss";
import ComLogo from "../../assets/logo/logo-2.png";
import Members from "../Members/Members";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="home_page">
          <img src={ComLogo} alt="companylogo" />
          <h2>Frontend Test</h2>
          <Members />
        </div>
      </>
    );
  }
}
