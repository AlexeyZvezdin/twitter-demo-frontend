import React, { Component } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { Grid, Row } from './Grid';
import HeaderBar from './Header/HeaderBar';
import BackPic from './BackPic.js';
import MainBlockNav from './ContentNav/MainBlockNav';
import MainBlock from './Content/MainBlock';

class Profile extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.fetchInfo();
    let user = this.props.match.url;
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchInfo();
    }
  }

  fetchInfo = () => {
    console.log(this.props.match.url);
    const hostname = 'https://twitter-demo.erodionov.ru';
    const secretCode = process.env.REACT_APP_SECRET_CODE;
    fetch(
      `${hostname}/api/v1/accounts${
        this.props.match.url
      }?access_token=${secretCode}`
    )
      .then(response => response.json())
      .then(res => {
        this.setState({ data: res });
      });
  };

  // state = {
  //   user: this.props.match.url
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: [],
  //     userID: props.match.params.id
  //   };
  // }

  // componentDidMount() {
  //   const user = this.props.match.url;
  //   console.log(user);
  // const userData = fetch(`${user}.json`)
  //   .then(function(response) {
  //     alert(response.headers.get("Content-Type")); // application/json; charset=utf-8
  //     alert(response.status); // 200

  //       return response.text();
  //     })
  //     .then(function(text) {
  //       console.log(text);
  //     })
  //     .catch(alert);
  // }
  render() {
    console.log(this.state.data);
    return (
      <Grid>
        <Row>
          <HeaderBar userUrl={this.state.data} />
          <BackPic
            alt="Picture"
            src={`/${process.env.PUBLIC_URL + './img/EveryInteract/back.png'}`}
          />
          <MainBlockNav />
          <MainBlock userUrl={this.state.data} />
        </Row>
      </Grid>
    );
  }
}

export default Profile;
