import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Followers, Videos } from "../Icons/Icons";
import { FollowersSrc } from "../Profile/data/EveryInteractData";

const FollowersBox = styled.div`
  margin: 20px 0;
  width: 262px;
  background: transparent;
  display: block;
`;

const FollowerFeed = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const FollowersIcon = styled.img.attrs({
  src: Followers,
  alt: ""
})`
  display: inline;
  margin-right: 5px;
`;

const FollowersYouKnow = styled(NavLink)`
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
`;

const FollowerPic = styled.img`
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-right: 4px;
`;
// Photos box
const FollowersBlock = () => {
  return (
    <React.Fragment>
      {FollowersSrc.map(Pic => <FollowerPic src={Pic} />)}
    </React.Fragment>
  );
};

const UserFollowers = () => {
  return (
    <FollowersBox>
      <FollowerFeed>
        <FollowersIcon />
        <FollowersYouKnow to="/EveryInteract">
          Followers You Know
        </FollowersYouKnow>
      </FollowerFeed>
      <FollowersBlock />
    </FollowersBox>
  );
};

export default UserFollowers;
