import React, { Component } from "react";
import styled from "styled-components";
import {
  BodyBlock,
  Col,
  Row,
  CommonBlock,
  AsideBlock,
  CentralBlock
} from "../Grid";
import MainBlockMenu from "./MainBlockMenu";
import RightBlockMenu from "./MainBlockRight";

const NavBar = styled.div`
  border-bottom: 1px solid #b0b8be;
  box-shadow: 10px 0 3px 0 #b0b8be;
  background: white;
`;

const MainNavBar = () => {
  return (
    <NavBar>
      <Row>
        <CommonBlock>
          <AsideBlock toRight />
          <CentralBlock>
            <MainBlockMenu />
          </CentralBlock>
          <AsideBlock toRight>
            <RightBlockMenu />
          </AsideBlock>
        </CommonBlock>
      </Row>
    </NavBar>
  );
};
export default MainNavBar;
