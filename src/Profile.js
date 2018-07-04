import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import { BodyBlock, Grid, Row } from "./Grid";
import HeaderBar from "./Header/HeaderBar";
import BackPic from "./BackPic.js";
import MainBlockNav from "./ContentNav/MainBlockNav";
import MainBlock from "./Content/MainBlock";

class Profile extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <HeaderBar />
          {/* </Row>
        <Row> */}
          <BackPic
            alt="Picture"
            src={`/${process.env.PUBLIC_URL + "./img/EveryInteract/back.png"}`}
          />
          {/* </Row>
        <Row> */}
          <MainBlockNav />
          {/* </Row>
        <Row> */}
          <MainBlock />
        </Row>
      </Grid>
    );
  }
}

export default Profile;
