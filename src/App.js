import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "normalize.css";
import { BodyBlock } from "./Grid";
import Profile from "./Profile";

const NoPage = ({ location }) => (
  <React.Fragment>
    <h3>
      {" "}
      No match for <code>{location.pathname}</code>
    </h3>
  </React.Fragment>
);

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
          <Switch>
            <Route path="/EveryInteract" component={Profile} />
            <Redirect from="/" to="/EveryInteract/tweets" />

            <Route component={NoPage} />
          </Switch>
        </BodyBlock>
      </Router>
    );
  }
}

export default App;
