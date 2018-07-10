import React, { Component } from "react";
import styled from "styled-components";
import { IconLocation, IconLink, IconJoined, Confirmed } from "../Icons/Icons";
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
`;

const UserTagName = styled.div`
  display: inline;
  color: #697787;
  font-size: 14px;
`;

const UserTagNameStatus = styled.div`
  display: ${props => (props.isFollow ? "inline" : "none")};
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
  display: ${props => (props.isConfirmed ? "inline-block" : "none")};
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

const SocialButtonTweetTo = props => {
  return (
    <SocialBut right>
      <SocialButLink to={props.data}>Tweet To</SocialButLink>
    </SocialBut>
  );
};

const SocialButtonMessage = props => {
  return (
    <SocialBut>
      <SocialButLink to={props.data}>Message</SocialButLink>
    </SocialBut>
  );
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userObject: ""
    };
  }

  componentWillMount() {
    fetch(`${this.props.data}.json`)
      .then(function(response) {
        return response.json();
      })
      .then(myResponse => {
        let userData = myResponse;

        this.setState({
          userObject: userData
        });
      })
      .catch(alert);
  }

  render() {
    return (
      <LeftSideDiv>
        <AvatarBlock src={this.state.userObject.avatar} />
        <UserName>
          <span>{this.state.userObject.name}</span>
          <UserConfirmed src={Confirmed} alt="Tick" />
        </UserName>
        <UserTagName>{this.state.userObject.tag}</UserTagName>
        <UserTagNameStatus> Follows you </UserTagNameStatus>
        <UserInfo>{this.state.userObject.descriptionInfo}</UserInfo>
        <UserLocation>
          <img src={IconLocation} alt="Location" />
          <span>{this.state.userObject.location}</span>
        </UserLocation>
        <UserSite>
          <img src={IconLink} alt="Site" />
          <UserSiteLink to={this.props.data}>
            {this.state.userObject.site}
          </UserSiteLink>
        </UserSite>
        <UserJoined>
          <img src={IconJoined} alt="Joined" />
          <span>
            Joined {this.state.userObject.yearJoined}{" "}
            {this.state.userObject.monthJoined}
          </span>
        </UserJoined>
        <SocialButtons>
          <SocialButtonTweetTo data={this.props.data} />
          <SocialButtonMessage data={this.props.data} />
        </SocialButtons>
      </LeftSideDiv>
    );
  }
}

export default UserProfile;
