import React, { Components } from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import WallPostInfoBar from "./WallPostInfoBar";
import {
  EveryInteract,
  UserWallPosts
} from "../Profile/data/EveryInteractData";

const WallBox = styled.div`
  margin-top: 8px;
  margin-left: 4px;
`;

const WallMenu = styled.div`
  display: flex;
  height: 59px;
  flex-direction: row;
  justify-content: flex-start;
  background: white;
  margin-bottom: 2px;
`;
const WallLink = styled(NavLink)`
  display: flex;
  padding: 20px;
  justify-content: center;
  color: #1da1f2;
  text-decoration: none;
  > span {
    font-weight: bold;
    font-size: 18px;
  }
  &.hover {
    color: black;
  }
  &.active {
    color: black;
    cursor: default;
  }
`;
// Wall
const WallContent = styled.div`
  width: 100%;
  height: 1000px;
  background: white;
`;

const WallContainer = styled.div`
  display: flex;
  flex-direction: flex-row;
  margin: 0;
  padding: 0;
`;

const UserAva = styled.img`
  display: flex;
  margin-top: 27px;
  margin-left: 11px;
  height: 50px;
  border-radius: 100%;
`;

const WallPostContent = styled.div`
  vertical-align: top;
  margin: 22px 15px;
  padding: 0;

  width: 495px;
`;

const PostUserName = styled.span`
  font-weight: bold;
  font-size: 15px;
  margin-right: 3px;
`;

const PostUserTagName = styled.span`
  color: #707e88;
  font-size: 12px;
  margin-right: 3px;
`;

const PostUserPublishDate = styled.span`
  color: #707e88;
  font-size: 12px;
  margin-right: 3px;
`;
//WallPost content

const WallPostHead = styled.div`
  display: flex;
  align-items: baseline;
`;

const WallPostText = styled.p`
  font-size: 25px;
  font-family: Helvetica;
  font-weight: 100;
  margin-top: 8px;
  margin-bottom: 0;
`;

//Здесь надо в аттрз проверку поставить если сорс = 0 то никаких маржинов и дисплеев
const WallPostImg = styled.img`
  width: 495px;
  object-fit: cover;
  margin-top: 17px;
`;

const WallPost = () => {
  return (
    <React.Fragment>
      {UserWallPosts.map(
        (info, index) =>
          index < 2 ? (
            <WallContainer>
              <UserAva src={EveryInteract.avatar} alt="UserAvaMini" />
              <WallPostContent>
                <WallPostHead>
                  <PostUserName>{EveryInteract.name}</PostUserName>
                  <PostUserTagName> {EveryInteract.tag} ●</PostUserTagName>
                  <PostUserPublishDate>{info.date}</PostUserPublishDate>
                </WallPostHead>
                <WallPostText>{info.text}</WallPostText>
                <WallPostImg alt={info.img.alt} src={`/${info.img.src}`} />
                <WallPostInfoBar data={info.info} />
              </WallPostContent>
            </WallContainer>
          ) : (
            false
          )
      )}
    </React.Fragment>
  );
};

const Wall = () => {
  return (
    <WallBox>
      <WallMenu>
        <WallLink to="/EveryInteract/tweets/tweets">
          <span>Tweets</span>{" "}
        </WallLink>
        <WallLink to="/EveryInteract/tweets/replies">
          {" "}
          <span>Tweets & replies </span>
        </WallLink>
        <WallLink to="/EveryInteract/tweets/media">
          {" "}
          <span>Media</span>{" "}
        </WallLink>
      </WallMenu>

      <WallContent>
        <Switch>
          <Route path="/EveryInteract/tweets" component={WallPost} />
          <Route path="/EveryInteract/tweets/tweets" component={WallPost} />
          <Route path="/EveryInteract/tweets/replies" component={WallPost} />
          <Route path="/EveryInteract/tweets/media" component={WallPost} />
        </Switch>
      </WallContent>
    </WallBox>
  );
};

export default Wall;
