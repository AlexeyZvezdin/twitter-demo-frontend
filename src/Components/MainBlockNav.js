import React, { Component } from "react";
import styled from "styled-components";
import {
  BodyBlock,
  Col,
  Row,
  CommonBlock,
  AsideBlock,
  CentralBlock
} from "./Grid";
import MainBlockMenu from "./MainBlockNav/MainBlockMenu";

import MainBLockRight from "./MainBlockNav/MainBlockRight";

const UnderLine = styled.div`
  border-bottom: 3px solid lightgrey;
`;

const MainNavBar = () => {
  return (
    <UnderLine>
      <Row>
        <CommonBlock>
          <AsideBlock toright />
          <CentralBlock>
            <MainBlockMenu />
          </CentralBlock>
          <AsideBlock toright>
            <MainBLockRight />
          </AsideBlock>
        </CommonBlock>
      </Row>
    </UnderLine>
  );
};
export default MainNavBar;
export { CommonBlock };
