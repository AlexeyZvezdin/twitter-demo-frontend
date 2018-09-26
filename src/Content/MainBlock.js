import React, { Component } from 'react';
import { CommonBlock, Row, AsideBlock, CentralBlock } from '../Grid';
import UserProfile from './UserProfile';
import Wall from '../Wall/TweetWall';
import { Followers } from '../Profile/data/WhoToFollow';
import { Route } from 'react-router-dom';
import UserFollowers from './UserFollowers';
import Photos from './UserPhotos';
import FollowBlock from './FollowBlock';
import TrendBlock from './Trends';
import Footer from './Footer';

class MainBlock extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { ProfileUrl: props.userUrl };
  // }
  render() {
    console.log(this.props.userUrl);
    return (
      <Row>
        <CommonBlock>
          <AsideBlock toRight>
            <Row>
              <UserProfile data={this.props.userUrl} />
              <UserFollowers />
              <Photos />
            </Row>
          </AsideBlock>
          <CentralBlock>
            <Route path={`${this.props.userUrl}/tweets`} component={Wall} />
            <Route path={`${this.props.userUrl}/following`} component={Wall} />
            <Route path={`${this.props.userUrl}/followers`} component={Wall} />
            <Route path={`${this.props.userUrl}/likes`} component={Wall} />
            <Route path={`${this.props.userUrl}/lists`} component={Wall} />
          </CentralBlock>
          <AsideBlock col>
            <FollowBlock data={this.props.userUrl} />
            <TrendBlock />
            <Footer />
          </AsideBlock>
        </CommonBlock>
      </Row>
    );
  }
}

export default MainBlock;
