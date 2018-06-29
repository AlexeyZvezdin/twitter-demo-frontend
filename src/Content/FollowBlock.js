import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import UserData from "../Profile/data/EveryInteractData";

const FollowBox = styled.div`
  width: 290px;
  height: 362px;
  margin: 10px 10px;
  background: white;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  margin: 15px 13px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const TitleActions = styled(NavLink)`
  color: #1da1f2;
  text-decoration: none;
  font-size: 13px;
  > span {
    color: lightgrey;
    font-weight: bold;
  }
`;
//Не знаю здесь необходим ли навлинк, скорее всего нет, только сейчас задумался, по идее всё можно сделать через onClick

//Users

const UsersBlock = styled.div`
  display: block;
  margin: 6px 16px;
  background: grey;
`;

const AdvisedUser = styled.div`
  padding: 0;
  background: lightblue;
`;

// const UserAva = styled.img.attrs((alt: "AppleInsider"), (src: {}))``;

class FollowBlock extends Component {
  render() {
    return (
      <FollowBox>
        <Head>
          <Title>Who to follow</Title>
          <TitleActions to="/everyinteract">
            <span>&#8194;•&#8194;</span>Refresh<span>&#8194;•&#8194;</span>
          </TitleActions>
          <TitleActions to="/everyinteract">View All</TitleActions>
        </Head>
        <UsersBlock />
      </FollowBox>
    );
  }
}

export default FollowBlock;
