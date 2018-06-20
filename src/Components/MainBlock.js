import React, { Components } from "react";
import style from "styled-components";
import { CommonBlock, Row, AsideBlock, CentralBlock } from "./Grid";
import MainBlockLeft from "./MainBlockNav/MainBlockLeft";
import Wall from "./Wall/Wall.js";
const MainBlock = () => {
  return (
    <Row>
      <CommonBlock>
        <AsideBlock toright>
          <MainBlockLeft />
        </AsideBlock>
        <CentralBlock>
          <Wall />
        </CentralBlock>
        <AsideBlock toright />
      </CommonBlock>
    </Row>
  );
};

export default MainBlock;
