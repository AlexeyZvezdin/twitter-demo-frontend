import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RightSide = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background: white;
`;

const ButtonFollow = styled.button`
  display: block;
  border-radius: 50px;
  background: white;
  padding: 0px;
  border: 1px solid #1da1f2;
  height: 36px;
`;

const ButtonFollowLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #1da1f2;
  font-size: 14px;
  font-style: bold;
  padding: 8px 30px;
`;

const DropDownButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  margin-left: 5px;
  border-radius: 30%;
  background: white;
  > img {
    padding: 8px;
  }
  :hover {
    border: 1px solid #1da1f2;
    cursor: pointer;
  }
  :active {
    border: 1px solid #1da1f2;
  }
`;

//dropdown

const RightMenu = styled.div`
  background: #e6ecf0;
  width: 280px;
  display: flex;
  flex-direction: column;
  display: ${props => (props.isToggleOn ? "block" : "none")};
  position: absolute;
  top: 60px;
  right: 0px;
`;

const MenuBox = styled.div`
  background: white;
  margin: 3px 0;
  padding: 5px 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Action = styled.button`
  margin: 0;
  outline: none;
  background: white;
  border: none;
  cursor: pointer;
  color: #697787;
  font-size: 14px;
  :hover {
    background: #1da1f2;
  }
`;

class RightBlockMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <RightSide>
        <ButtonFollow>
          <ButtonFollowLink to="/EveryInteraction">Follow</ButtonFollowLink>
        </ButtonFollow>
        <DropDownButton onClick={this.handleClick}>
          <img
            alt="drop-down-menu"
            src={process.env.PUBLIC_URL + "./img/Icon_ More.png"}
          />
        </DropDownButton>
        <RightMenu isToggleOn={this.state.isToggleOn}>
          <MenuBox>
            <Action> Send Tweet @incredible India </Action>
            <Action> Send Tweet @incredible India </Action>
          </MenuBox>
          <MenuBox>
            <Action> Send Tweet @incredible India </Action>
            <Action> Send Tweet @incredible India </Action>
            <Action> Send Tweet @incredible India </Action>
          </MenuBox>
          <MenuBox>
            <Action> Send Tweet @incredible India </Action>
            <Action> Send Tweet @incredible India </Action>
          </MenuBox>
        </RightMenu>
      </RightSide>
    );
  }
}

export default RightBlockMenu;
