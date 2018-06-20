import React, { Components } from "react";
import styled from "styled-components";

const WallPostInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 14px;
  background: white;
`;
const CommentIcon = styled.img`
  margin-right: 60px;
  height: 14px;
`;

const RetweetIcon = styled.img`
  margin-right: 14px;
  height: 14px;
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
`;

const LikeIconNumber = styled.span`
  color: #667580;
  font-weight: bold;
  font-size: 13px;
  margin-right: 38px;
`;

const MessageIcon = styled.img`
  height: 14px;
`;

const WallPostInfoBar = () => {
  return (
    <WallPostInfo>
      <CommentIcon
        src={process.env.PUBLIC_URL + "./img/icons/Icon_ Comments.png"}
      />
      <RetweetIcon
        src={process.env.PUBLIC_URL + "./img/Icons/Icon_ Retweet.png"}
      />
      <RetweetNumber> 17 </RetweetNumber>
      <LikeIcon src={process.env.PUBLIC_URL + "./img/Icons/Icon_  Loves.png"} />
      <LikeIconNumber> 61 </LikeIconNumber>
      <MessageIcon
        src={process.env.PUBLIC_URL + "./img/Icons/Icon_ Envelope.png"}
      />
    </WallPostInfo>
  );
};
export default WallPostInfoBar;
