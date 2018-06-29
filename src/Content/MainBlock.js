import React, { Components } from "react";
import styled from "styled-components";
import { CommonBlock, Row, AsideBlock, CentralBlock } from "../Grid";
import UserProfile from "./UserProfile";
import Wall from "../Wall/Wall.js";
import { Followers } from "../Profile/data/EveryInteractData";
import { NavLink, Route } from "react-router-dom";
import UserFollowers from "./UserFollowers";
import Photos from "./UserPhotos";
import FollowBlock from "./FollowBlock";
import TrendBlock from "./Trends";

const MainBlock = () => {
  return (
    <Row>
      <CommonBlock>
        <AsideBlock toRight>
          <Row>
            <UserProfile />
            <UserFollowers />
            <Photos />
          </Row>
        </AsideBlock>
        <CentralBlock>
          <Wall>
            <Route path="/everyinteract/tweets" children={Wall} />
          </Wall>
        </CentralBlock>
        <AsideBlock col>
          <FollowBlock />
          <TrendBlock />
        </AsideBlock>
      </CommonBlock>
    </Row>
  );
};

export default MainBlock;
