import React, { Component } from "react";
import styled from "styled-components";
import "normalize.css";
import { Grid, Row } from "./Grid";
import HeaderBar from "./Header/HeaderBar";
import BackPic from "./BackPic.js";
import MainBlockNav from "./ContentNav/MainBlockNav";
import MainBlock from "./Content/MainBlock";

class Profile extends Component {
  // state = {
  //   user: this.props.match.url
  // };
  componentDidMount() {
    let user = this.props.match.url;
    console.log(user);
  }
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
    return (
      <Grid>
        <Row>
          <HeaderBar userUrl={this.props.match.url} />
          <BackPic
            alt="Picture"
            src={`/${process.env.PUBLIC_URL + "./img/EveryInteract/back.png"}`}
          />
          <MainBlockNav />
          <MainBlock userUrl={this.props.match.url} />
        </Row>
      </Grid>
    );
  }
}

export default Profile;
