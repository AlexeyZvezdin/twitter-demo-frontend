import React, { Component } from "react";
import styled from "styled-components";

const BodyBlock = styled.div`
  display: block;
  height: 1545px;
  background: #e6ecf0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
//#E6ECF0
//#bbd3f9
const CommonBlock = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1200px;
  height: 59px;
`;

const AsideBlock = styled.div`
  display: flex;
  flex-grow: 2;
  min-width: 300px;

  justify-content: ${props => (props.toRight ? "flex-end" : "")};
`;
const CentralBlock = styled.div`
  min-width: 590px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
const Col = styled.div`
  jusitfy-content: center;
  display: flex;
  flex-direction: row;
`;

export { BodyBlock, CommonBlock, Grid, Row, Col, AsideBlock, CentralBlock };
