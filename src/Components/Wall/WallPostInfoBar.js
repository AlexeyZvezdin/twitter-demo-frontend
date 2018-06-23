import React, { Components } from "react";
import styled from "styled-components";
import { Comments, Envelope, Loves, Retweet } from "../../Icons/Icons";

const WallPostInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 14px;
  background: white;
`;
const CommentIcon = styled.img`
  margin-right: 60px;
  height: 14px;
  cursor: pointer;
`;

const RetweetIcon = styled.img`
  margin-right: 14px;
  height: 14px;
  cursor: pointer;
`;

const RetweetNumber = styled.span`
  color: #667580;
  font-weight: bold;
  font-size: 13px;
  margin-right: 38px;
`;

const LikeIcon = styled.img`
  margin-right: 14px;
  height: 14px;
  cursor: pointer;
`;

const LikeIconNumber = styled.span`
  color: #667580;
  font-weight: bold;
  font-size: 13px;
  margin-right: 38px;
`;

const MessageIcon = styled.img`
  height: 14px;
  cursor: pointer;
`;

const WallPostInfoBar = () => {
  return (
    <WallPostInfo>
      <CommentIcon src={Comments} />
      <RetweetIcon src={Retweet} />
      <RetweetNumber> 17 </RetweetNumber>
      <LikeIcon src={Loves} />
      <LikeIconNumber> 61 </LikeIconNumber>
      <MessageIcon src={Envelope} />
    </WallPostInfo>
  );
};
export default WallPostInfoBar;
