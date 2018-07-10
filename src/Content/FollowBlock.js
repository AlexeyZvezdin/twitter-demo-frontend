import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Delete } from "../Icons/Icons";

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
  display: flex;
  padding: 0;

  position: relative;
`;

const UserAva = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const UserInfoText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  line-height: 12px;
  margin: 5px 12px 0;
`;

const UserInfoName = styled.span`
  font-weight: bold;
  font-size: 13px;
`;

const UserInfoConfirmed = styled.img`
  display: ${props => (props.isConfirmed ? "inline" : "none")};
`;

const UserInfoTag = styled.span`
  color: #788a98;
  font-size: 13px;
`;

const UserInfoDelete = styled.img.attrs({
  src: Delete
})`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const FollowButton = styled.button`
  width: 89px;
  height: 29px;
  background-color: white;
  color: #1da1f2;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  margin: 7px 9px 0;
  padding: 6px 22px;
  font-size: 14px;
  cursor: pointer;
`;

class FollowBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ava: null
    };
  }

  //Выбрать первых трех из бд. Если профилурл == вытаскиваему, то пропустить

  componentWillMount() {
    fetch(`/img${this.props.data}/ava.png`)
      .then(function(response) {
        return response.blob();
      })
      .then(myBlob => {
        var objectURL = URL.createObjectURL(myBlob);
        console.log(objectURL);
        this.setState({
          Ava: objectURL
        });
      })
      .catch(alert);
  }

  render() {
    return (
      <FollowBox>
        <Head>
          <Title>Who to follow</Title>
          <TitleActions to={this.props.data}>
            <span>&#8194;•&#8194;</span>Refresh<span>&#8194;•&#8194;</span>
          </TitleActions>
          <TitleActions to={this.props.data}>View All</TitleActions>
        </Head>

        <UsersBlock>
          <AdvisedUser>
            <UserAva src={this.state.Ava} />
            <UserInfo>
              <UserInfoText>
                <UserInfoName> AppleInsider </UserInfoName>
                <UserInfoConfirmed />&#8192;
                <UserInfoTag>@appleinsider</UserInfoTag>
                <UserInfoDelete />
              </UserInfoText>
              <FollowButton> Follow </FollowButton>
            </UserInfo>
          </AdvisedUser>
        </UsersBlock>
      </FollowBox>
    );
  }
}

export default FollowBlock;
