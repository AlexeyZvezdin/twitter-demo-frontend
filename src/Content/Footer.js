import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FootBox = styled.div`
  width: 244px;
  background: lightblue;
  margin-top: 24px;
  margin-left: 11px;
  color: #718290;
  font-size: 13px;
  line-height: 18px;
`;

const CopyRight = styled.span`
  cursor: text;
`;

const FootLink = styled(NavLink)`
  text-decoration: none;
  color: #718290;
  font-size: 13px;
  line-height: 18px;
`;

const Footer = () => {
  return (
    <FootBox>
      <CopyRight>© 2018 Twitter</CopyRight>&#8194;
      <FootLink to="/EveryInteract">About</FootLink>&#8194;
      <FootLink to="/EveryInteract">Help Center</FootLink>&#8192;
      <FootLink to="/EveryInteract">Terms</FootLink>&#8192;
      <FootLink to="/EveryInteract">Privacy Policy</FootLink>&#8194;
      <FootLink to="/EveryInteract">Cookies</FootLink>&#8194;
      <FootLink to="/EveryInteract">Ads info</FootLink>
    </FootBox>
  );
};

export default Footer;
