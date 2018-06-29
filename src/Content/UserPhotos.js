import React, { Components } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Videos } from "../Icons/Icons";
import { PhotosSrc } from "../Profile/data/EveryInteractData";

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

const PhotCont = styled.div``;

const PhotoWrap = () => {
  return <PhotCont>{PhotosSrc.map(source => <Photo src={source} />)}</PhotCont>;
};

const Photos = () => {
  return (
    <PhotosBox>
      <PhotosFeed>
        {" "}
        <PhotosIcon src={Videos} />
        <YourVideos to="/EveryInteract">552 Photos and Videos</YourVideos>
      </PhotosFeed>
      <PhotoWrap />
    </PhotosBox>
  );
};

export default Photos;
