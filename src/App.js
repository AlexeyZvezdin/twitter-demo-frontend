// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';
import 'normalize.css';
import { BodyBlock } from './Grid';
import Profile from './Profile';

const NoPage = ({ location }) => (
  <React.Fragment>
    <h3>
      {' '}
      No match for <code>{location.pathname}</code>
    </h3>
  </React.Fragment>
);

const LogPage = styled.div`
  background: lightgrey;
  width: 100%;
  height: 100%;
`;

const LogPageChoose = styled.div`
  display: table;
  margin: 0 auto;
`;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.history.push(`/${this.state.value}`);

    event.preventDefault();
  }

  render() {
    return (
      <LogPage>
        <LogPageChoose>
          <form onSubmit={this.handleSubmit}>
            <label>
              Input Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p> EveryInteract or from 1 to 5 </p>
        </LogPageChoose>
      </LogPage>
    );
  }
}

const NameFormWithRouter = withRouter(NameForm);

class App extends Component {
  render() {
    // const { data } = this.state.data;
    // console.log(this.state.data);
    // const FakeAuth = {
    //   isAuth: false,
    //   authenticate(cb) {
    //     (this.isAuth = true), setTimeout(cb, 1000); //fake async
    //   },
    //   signOut(cb) {
    //     (this.isAuth = false), setTimeout(cb, 1000);
    //   },
    // };
    return (
      <Router>
        <BodyBlock>
          <Helmet>
            <title>Home, Dear Home</title>
          </Helmet>
          <Switch>
            <Route path="/:id" component={Profile} />
            <Route exact path="/" component={NameFormWithRouter} />
            <Redirect to="/" />
            <Route component={NoPage} />
          </Switch>
        </BodyBlock>
      </Router>
    );
  }
}

export default App;
