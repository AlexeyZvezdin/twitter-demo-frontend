import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import { BodyBlock, Grid, Row } from "./Components/Grid";
import HeaderBar from "./Components/HeaderBar.js";
import BackPic from "./Components/BackPic.js";
import MainBlockNav from "./Components/MainBlockNav";
import MainBlock from "./Components/MainBlock";

class App extends Component {
  render() {
    return (
      <Router>
        <BodyBlock>
          <Helmet>
            <html lang="ru" amp />
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Home, Dear Home</title>
          </Helmet>
          <Grid>
            <Row>
              <HeaderBar />
            </Row>
            <Row>
              <BackPic
                alt="Picture"
                src={process.env.PUBLIC_URL + "./img/back.png"}
              />
            </Row>
            <Row>
              <MainBlockNav />
            </Row>
            <Row>
              <MainBlock />
            </Row>
          </Grid>
        </BodyBlock>
      </Router>
    );
  }
}

export default App;
