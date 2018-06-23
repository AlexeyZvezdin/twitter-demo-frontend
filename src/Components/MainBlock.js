import React, { Components } from "react";
import styled from "styled-components";
import { CommonBlock, Row, AsideBlock, CentralBlock } from "./Grid";
import MainBlockLeft from "./MainBlock/MainBlockLeft";
import Wall from "./Wall/Wall.js";
import { Followers } from "../profile/data/UserData";
import { NavLink } from "react-router-dom";
import { Foll, Videos } from "../Icons/Icons";

const FollowersBox = styled.div`
  margin: 20px 0;
  width: 262px;
  background: transparent;
  display: block;
`;

const FollowerFeed = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const FollowersYouKnow = styled(NavLink)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
`;

const FollowerPic = styled.img`
  display: inline-block;
  width: 48px;
  height: 48px;
  padding-right: 4px;
`;
// Photos box
const PhotosBox = styled.div`
  margin: 20px 0;
  width: 262px;
  background: transparent;
  display: block;
`;

const PhotosFeed = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const PhotosIcon = styled.img`
  display: inline-block;
  margin-right: 5px;
`;

const YourVideos = styled(NavLink)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
`;

const Photo = styled.img`
  display: inline-block;
  width: 83px;
  height: 83px;
  padding-right: 4px;
`;

//RightFollowBlock

const FollowBlock = styled.div`
  width: 290px;
  height: 362px;
  margin: 9px 10px;
  background: papayawhip;
`;

const MainBlock = () => {
  return (
    <Row>
      <CommonBlock>
        <AsideBlock toRight>
          <Row>
            <MainBlockLeft />
            <FollowersBox>
              <FollowerFeed>
                {/* <Foll src={Foll} /> */}
                <FollowersYouKnow to="/EveryInteract">
                  {" "}
                  Followers You Know{" "}
                </FollowersYouKnow>
              </FollowerFeed>
              <FollowerPic src={Followers.one} />
              <FollowerPic src={Followers.two} />
              <FollowerPic src={Followers.three} />
              <FollowerPic src={Followers.four} />
              <FollowerPic src={Followers.five} />
              <FollowerPic src={Followers.six} />
            </FollowersBox>
            <PhotosBox>
              <PhotosFeed>
                {" "}
                <PhotosIcon src={Videos} />
                <FollowersYouKnow to="/EveryInteract">
                  552 Photos and Videos
                </FollowersYouKnow>
              </PhotosFeed>
              <Photo src={process.env.PUBLIC_URL + "./img/photos/1.png"} />
              <Photo src={process.env.PUBLIC_URL + "./img/photos/2.png"} />
              <Photo src={process.env.PUBLIC_URL + "./img/photos/3.png"} />
              <Photo src={process.env.PUBLIC_URL + "./img/photos/4.png"} />
              <Photo src={process.env.PUBLIC_URL + "./img/photos/5.png"} />
              <Photo src={process.env.PUBLIC_URL + "./img/photos/6.png"} />
            </PhotosBox>
          </Row>
        </AsideBlock>
        <CentralBlock>
          <Wall />
        </CentralBlock>
        <AsideBlock toRight>
          <FollowBlock>WhoToFollow</FollowBlock>
        </AsideBlock>
      </CommonBlock>
    </Row>
  );
};

export default MainBlock;
