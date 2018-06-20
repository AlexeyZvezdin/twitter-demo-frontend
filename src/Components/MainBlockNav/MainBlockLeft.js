import React, { Component } from "react";
import styled from "styled-components";
import { IconLocation, IconLink, IconJoined } from "../../svg/Icons.jsx";
import { NavLink } from "react-router-dom";

const LeftSideDiv = styled.div`
  margin-top: -190px;
  margin-right: 30px;
  width: 242px;
  background: transporent;
`;

const AvatarBlock = styled.img`
  border-radius: 50%;
  height: 201px;
`;

const UserName = styled.h3`
  color: #14171a;
  margin: 10px 0 5px;

  > img {
    position: relative;
    top: 3px;
    margin-left: 5px;
  }
`;

const UserTagName = styled.div`
  display: inline;
  color: #697787;
  font-size: 14px;
`;

const UserTagNameStatus = styled.div`
  display: inline;
  padding: 5px;
  color: #697787;
  font-size: 12px;
`;

const UserInfo = styled.p`
  font-size: 14px;
  line-height: 22px;
`;

const UserLocation = styled.div`
  display: block;
  padding: 5px 0;
  > img {
    position: relative;
    top: 3px;
    margin-right: 10px;
  }
  > span {
    font-size: 14px;
    color: #697787;
  }
`;

const UserSite = styled.div`
  display: block;
  padding: 5px 0;
  > img {
    position: relative;
    top: 3px;
    margin-right: 12px;
  }
`;

const UserSiteLink = styled(NavLink)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
`;

const UserJoined = styled.div`
  display: block;
  padding: 5px 0;
  > img {
    position: relative;
    top: 3px;
    margin-right: 10px;
  }
  > span {
    font-size: 14px;
    color: #697787;
  }
`;

const SocialButtons = styled.div`
  display: block;
  width: 262px;
  margin-top: 10px;
  padding: 0;
`;

const SocialBut = styled.button`
  display: inline-block;
  border-radius: 100px;
  background: #1da1f2;
  margin-right: ${props => (props.right ? "8px" : "")};
  border: none;
  outline: none;
  padding: 0;
  font-size: 14px;
`;

const SocialButLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: white;
  padding: 10px 35px;
  font-style: bold;
`;

const SocialButtonTweetTo = () => {
  return (
    <SocialBut right>
      <SocialButLink to="/EveryInteraction">Tweet To</SocialButLink>
    </SocialBut>
  );
};

const SocialButtonMessage = () => {
  return (
    <SocialBut>
      <SocialButLink to="/EveryInteraction">Message</SocialButLink>
    </SocialBut>
  );
};

const MainBlockLeft = () => {
  return (
    <LeftSideDiv>
      <AvatarBlock src={process.env.PUBLIC_URL + "/img/1.png"} />
      <UserName>
        <span>EveryInteraction</span>
        <img src={process.env.PUBLIC_URL + "/img/Tick.png"} alt="Tick" />
      </UserName>
      <UserTagName>@EveryInteract </UserTagName>
      <UserTagNameStatus> Follows you </UserTagNameStatus>
      <UserInfo>
        UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.
      </UserInfo>
      <UserLocation>
        <img src={IconLocation} alt="Location" />
        <span>London, UK</span>
      </UserLocation>
      <UserSite>
        <img src={IconLink} alt="Site" />
        <UserSiteLink to="/EveryInteract">everyinteraction.com </UserSiteLink>
      </UserSite>
      <UserJoined>
        <img src={IconJoined} alt="Joined" />
        <span>Joined May 2008 </span>
      </UserJoined>
      <SocialButtons>
        <SocialButtonTweetTo />
        <SocialButtonMessage />
      </SocialButtons>
    </LeftSideDiv>
  );
};

export default MainBlockLeft;
