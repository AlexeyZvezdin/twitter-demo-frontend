import React, { Components } from "react";
import styled from "styled-components";
import { CommonBlock, Row, AsideBlock, CentralBlock } from "../Grid";
import LeftBlockProfile from "./LeftBlockProfile";
import Wall from "../Wall/Wall.js";
import { Followers } from "../Profile/data/EveryInteractData";
import { NavLink, Route } from "react-router-dom";
import LeftBlockFollowers from "./LeftBlockFollowers";
import LeftBlockPhotos from "./LeftBlockPhotos";
import Photos from "./LeftBlockPhotos";
import RightFollowBlock from "./RightFollowBlock";

const MainBlock = () => {
  return (
    <Row>
      <CommonBlock>
        <AsideBlock toRight>
          <Row>
            <LeftBlockProfile />
            <LeftBlockFollowers />
            <Photos />
          </Row>
        </AsideBlock>
        <CentralBlock>
          <Wall>
            <Route path="/everyinteract/tweets" children={Wall} />
          </Wall>
        </CentralBlock>
        <AsideBlock toRight>
          <RightFollowBlock />
        </AsideBlock>
      </CommonBlock>
    </Row>
  );
};

export default MainBlock;
