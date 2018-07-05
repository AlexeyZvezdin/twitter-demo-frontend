import React, { Component } from "react";
import { CommonBlock, Row, AsideBlock, CentralBlock } from "../Grid";
import UserProfile from "./UserProfile";
import Wall from "../Wall/TweetWall";
import { Followers } from "../Profile/data/EveryInteractData";
import { Route } from "react-router-dom";
import UserFollowers from "./UserFollowers";
import Photos from "./UserPhotos";
import FollowBlock from "./FollowBlock";
import TrendBlock from "./Trends";
import Footer from "./Footer";

class MainBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { ProfileUrl: props.userUrl };
  }
  render() {
    return (
      <Row>
        <CommonBlock>
          <AsideBlock toRight>
            <Row>
              <UserProfile />
              <UserFollowers />
              <Photos />
            </Row>
          </AsideBlock>
          <CentralBlock>
            <Route path="/EveryInteract/tweets" component={Wall} />
            <Route path="/EveryInteract/following" component={Wall} />
            <Route path="/EveryInteract/followers" component={Wall} />
            <Route path="/EveryInteract/likes" component={Wall} />
            <Route path="/EveryInteract/lists" component={Wall} />
          </CentralBlock>
          <AsideBlock col>
            <FollowBlock data={this.state.ProfileUrl} />
            <TrendBlock />
            <Footer />
          </AsideBlock>
        </CommonBlock>
      </Row>
    );
  }
}

export default MainBlock;
