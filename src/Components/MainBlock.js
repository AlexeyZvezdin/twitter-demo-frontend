import React, { Components } from "react";
import styled from "styled-components";
import { CommonBlock, Row, AsideBlock, CentralBlock } from "./Grid";
import MainBlockLeft from "./MainBlock/MainBlockLeft";
import Wall from "./Wall/Wall.js";

const Followers = styled.div`
  margin: 20px 0;
  width: 262px;
  background: palevioletred;
  display: block;
`;

const FollowBlock = styled.div`
  width: 290px;
  margin: 9px 10px;
  background: papayawhip;
`;

const FollowBar = styled.div``;

const MainBlock = () => {
  return (
    <Row>
      <CommonBlock>
        <AsideBlock toRight>
          <Row>
            <MainBlockLeft />
            <Followers> Followers </Followers>
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
