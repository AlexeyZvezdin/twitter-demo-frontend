import React, { Component } from "react";
import styled from "styled-components";
import { IconLocation, IconLink, IconJoined, Confirmed } from "../Icons/Icons";
import { NavLink } from "react-router-dom";
import { EveryInteract } from "../Profile/data/EveryInteractData";

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
`;

const UserTagName = styled.div`
  display: inline;
  color: #697787;
  font-size: 14px;
`;

const UserTagNameStatus = styled.div`
  display: ${props => (EveryInteract.isFollow ? "inline" : "none")};
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

const UserConfirmed = styled.img`
  position: relative;
  top: 3px;
  margin-left: 5px;
  display: ${props => (EveryInteract.isConfirmed ? "inline-block" : "none")};
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

const UserProfile = () => {
  return (
    <LeftSideDiv>
      <AvatarBlock src={EveryInteract.avatar} />
      <UserName>
        <span>{EveryInteract.name}</span>
        <UserConfirmed src={Confirmed} alt="Tick" />
      </UserName>
      <UserTagName>{EveryInteract.tag}</UserTagName>
      <UserTagNameStatus> Follows you </UserTagNameStatus>
      <UserInfo>{EveryInteract.descriptionInfo}</UserInfo>
      <UserLocation>
        <img src={IconLocation} alt="Location" />
        <span>{EveryInteract.location}</span>
      </UserLocation>
      <UserSite>
        <img src={IconLink} alt="Site" />
        <UserSiteLink to="/EveryInteract">{EveryInteract.site}</UserSiteLink>
      </UserSite>
      <UserJoined>
        <img src={IconJoined} alt="Joined" />
        <span>
          Joined {EveryInteract.monthJoined} {EveryInteract.yearJoined}{" "}
        </span>
      </UserJoined>
      <SocialButtons>
        <SocialButtonTweetTo />
        <SocialButtonMessage />
      </SocialButtons>
    </LeftSideDiv>
  );
};

export default UserProfile;
