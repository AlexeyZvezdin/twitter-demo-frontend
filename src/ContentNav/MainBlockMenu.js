import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MainWallNav = styled.nav`
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  width: 375px;
  height: 59px;
  margin-left: 0px;
  display: inline-flex;
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
  &.active {
    color: #1DA1F2;
    border-bottom: 4px solid #1DA1F2;
  }
  &.hover {
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

class MainBlockMenu extends Component {
  render() {
    return (
      <MainWallNav>
        <MainWallButton to="/EveryInteract/tweets">
          <SmallMainWallButtonText>Tweets</SmallMainWallButtonText>

          <BigMainWallButtonText>8,858</BigMainWallButtonText>
        </MainWallButton>

        <MainWallButton to="/EveryInteract/following" exact>
          <SmallMainWallButtonText>Following</SmallMainWallButtonText>
          <BigMainWallButtonText>721</BigMainWallButtonText>
        </MainWallButton>

        <MainWallButton to="/EveryInteract/followers" exact>
          <SmallMainWallButtonText>Followers</SmallMainWallButtonText>
          <BigMainWallButtonText>1,815</BigMainWallButtonText>
        </MainWallButton>

        <MainWallButton to="/EveryInteract/likes" exact>
          <SmallMainWallButtonText> Likes </SmallMainWallButtonText>
          <BigMainWallButtonText>460</BigMainWallButtonText>
        </MainWallButton>

        <MainWallButton to="/EveryInteract/lists" exact>
          <SmallMainWallButtonText> Lists</SmallMainWallButtonText>
          <BigMainWallButtonText>2</BigMainWallButtonText>
        </MainWallButton>
      </MainWallNav>
    );
  }
}

export default MainBlockMenu;
