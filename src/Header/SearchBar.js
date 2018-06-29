import React, { Component } from "react";
import styled, { css } from "styled-components";
import IconMagnifier from "../Icons/source/Magnifier.svg";
import { EveryInteract } from "../Profile/data/EveryInteractData";

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBox = styled.div`
  background-color: #f5f8fa;
  padding: 0;
`;

const SearchForm = styled.form`
  height: 30px;
  display: flex;
  flex-direction: row;
  width: 220px;
  background-color: #f5f8fa;
  padding: 5px;
  margin-right: 16px;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;
  justify-content: space-between;
  outline: none;
  color: #687b8a;
  :hover {
    border: 1px solid #1da1f2;
    background-color: #fff;
  }
  @media screen and (max-width: 1111px) {
    width: 60px;
  }
`;

const SearchInput = styled.input.attrs({
  placeholder: "Search Twitter",
  type: "Text"
})`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 12px;
`;

const SearchButton = styled.button`
  outline: none;
  background: url('${IconMagnifier}') transparent no-repeat center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;

const UserAvatar = styled.img.attrs({
  src: EveryInteract.avatar
})`
  margin: 8px 16px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
`;

const TweetButton = styled.button`
  color: #fff;
  padding: 2px 1px;
  outline: none;
  font-weight: bold;
  padding: 5px;
  height: 30px;
  margin: 8px 16px;
  min-width: 72px;
  border-radius: 100px;
  border: none;
  background-color: #1da1f2;
  text-align: center;
  font-size: 14px;
  &.hover {
    cursor: pointer;
    background-color: #1da1f2;
  }
  &.focus {
    background-color: #4a8ef9;
  }
`;

const SearchBar = () => (
  <RightContainer>
    <SearchBox>
      <SearchForm>
        <SearchInput />
        <SearchButton />
      </SearchForm>
    </SearchBox>
    <UserAvatar />
    <TweetButton> Tweet </TweetButton>
  </RightContainer>
);
export default SearchBar;
