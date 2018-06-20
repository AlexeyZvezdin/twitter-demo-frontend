import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SearchBar from "./Header/SearchBar";
import {
  IconMessagesSVG,
  IconHomeSVG,
  IconNotificationsSVG,
  IconMomentsSVG,
  TwitterLogoSVG
} from "../svg/Icons.jsx";

const HeaderBlock = styled.div`
  display: flex;
  z-index: 999;
  background: #ffffff;
  height: 45px;

  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid grey;
`;

const CommonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
  background: white;
`;

const TwitterBird = styled.img`
  left: 50%;
  top: 13px;
  position: absolute;
  cursor: pointer;
`;

const HeaderNavBar = styled.div`
  display: flex;
  padding-left: 0;
  margin: 0;
  padding: 0;
  background: white;
  height: 45px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
`;

const HeaderBarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #667580;
  text-decoration: none;
  border-bottom: 1px solid grey;
  :hover {
    border-bottom: 2px solid #1da1f2;
    color: #1da1f2;
  }
  > span {
    margin-left: 5px;
    @media screen and (max-width: 1110px) {
      display: none;
    }
  }
`;

export default class HeaderBar extends Component {
  render() {
    return (
      <HeaderBlock>
        <CommonContainer>
          <HeaderNavBar>
            <HeaderBarLink to="/EveryInteract">
              <img src={IconHomeSVG} alt="Icon Home" />
              <span> Home</span>
            </HeaderBarLink>

            <HeaderBarLink to="/EveryInteract">
              <img src={IconMomentsSVG} alt="Icon Moments" />
              <span> Moments</span>
            </HeaderBarLink>

            <HeaderBarLink to="/EveryInteract">
              <img src={IconNotificationsSVG} alt="Icon Notifications" />
              <span> Notifications</span>
            </HeaderBarLink>

            <HeaderBarLink to="/EveryInteract">
              <img src={IconMessagesSVG} alt="Icon Messages" />
              <span>Messages</span>
            </HeaderBarLink>
          </HeaderNavBar>
          <SearchBar />
        </CommonContainer>

        <TwitterBird src={TwitterLogoSVG} alt="Twitter" />
      </HeaderBlock>
    );
  }
}
