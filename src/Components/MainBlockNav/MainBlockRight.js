import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RightSideContainer = styled.div`
  display: block;
`;

const RightSideDiv = styled.div`
  display: flex;
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
  }
  :active {
    border: 1px solid #1da1f2;
  }
`;

// const DropDown = styled.ul`
// display: none;
// :active {
// display: block;

// }

// `;

// const RightMenu = () => {
//   return (

//   );
// }

const MainBlockRight = () => {
  return (
    <RightSideDiv>
      <ButtonFollow>
        <ButtonFollowLink to="/EveryInteraction">Follow</ButtonFollowLink>
      </ButtonFollow>
      <DropDownButton>
        <img
          alt="drop-down-menu"
          src={process.env.PUBLIC_URL + "./img/Icon_ More.png"}
        />
      </DropDownButton>
    </RightSideDiv>
  );
};

export default MainBlockRight;
