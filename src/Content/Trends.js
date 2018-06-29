import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TrendBox = styled.div`
  height: 390px;
  width: 290px;
  background: lightblue;
  display: block;
  margin: 0 11px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin: 15px 13px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const TitleActions = styled(NavLink)`
  color: #1da1f2;
  text-decoration: none;
  font-size: 13px;
  > span {
    color: lightgrey;
    font-weight: bold;
  }
`;

class TrendBlock extends Component {
  render() {
    return (
      <TrendBox>
        <Head>
          <Title>United Kingdom Trends</Title>
          <TitleActions to="/everyinteract">
            <span>&#8194;•&#8194;</span>Change
          </TitleActions>
        </Head>
      </TrendBox>
    );
  }
}

export default TrendBlock;
