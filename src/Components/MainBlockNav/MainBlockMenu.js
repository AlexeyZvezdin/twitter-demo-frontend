import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MainWallNav = styled.ul`
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  width: 375px;
  height: 59px;
  margin-left: 0px;
  display: inline-flex;
  > li {
    list-style: none;
    color: #788a98;
  }
`;

const MainWallButton = styled(NavLink)`
text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
  color: #788A98;
  cursor: pointer
  box-sizing: border-box;
  height: 100%;
  width: 75px;
  :active {
    color: #1DA1F2;
    border-bottom: 4px solid #1DA1F2;
  }
  :hover {
    color: #1DA1F2;
    border-bottom: 4px solid #1DA1F2;
    
  }
`;

const BigMainWallButtonText = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;
const SmallMainWallButtonText = styled.p`
  font-size: 12px;
  font-weight: 600;
  padding: 8px;
  margin: 0;
  color: #788a98;
`;
// Right Menu Container

const RightMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
`;

const EmptyCont = styled.div`
  background: lightblue;
  height: 60px;
`;

const ButtonFollow = styled.button``;

class MainBlockMenu extends Component {
  render() {
    return (
      <MainWallNav>
        <li>
          <MainWallButton
            to="/EveryInteract"
            exact
            activeStyle={{ color: "green" }}
          >
            <SmallMainWallButtonText> Tweets</SmallMainWallButtonText>

            <BigMainWallButtonText>8,858</BigMainWallButtonText>
          </MainWallButton>
        </li>
        <li>
          <MainWallButton
            to="/EveryInteract"
            exact
            activeStyle={{ color: "orange" }}
          >
            <SmallMainWallButtonText>Following </SmallMainWallButtonText>
            <BigMainWallButtonText>721</BigMainWallButtonText>
          </MainWallButton>
        </li>

        <li>
          <MainWallButton
            to="/EveryInteract"
            exact
            activeStyle={{ color: "cyan" }}
          >
            <SmallMainWallButtonText>Followers</SmallMainWallButtonText>
            <BigMainWallButtonText>1,815</BigMainWallButtonText>
          </MainWallButton>
        </li>
        <li>
          <MainWallButton
            to="/EveryInteract"
            exact
            activeStyle={{ color: "tomato" }}
          >
            <SmallMainWallButtonText> Likes </SmallMainWallButtonText>
            <BigMainWallButtonText>460</BigMainWallButtonText>
          </MainWallButton>
        </li>
        <li>
          <MainWallButton
            to="/EveryInteract"
            exact
            activeStyle={{ color: "tomato" }}
          >
            <SmallMainWallButtonText> Lists</SmallMainWallButtonText>
            <BigMainWallButtonText>2</BigMainWallButtonText>
          </MainWallButton>
        </li>
      </MainWallNav>
    );
  }
}

export default MainBlockMenu;
