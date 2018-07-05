const publicUrl = process.env.PUBLIC_URL;

const AppleInsiderData = {
  id: 2,
  name: "Apple Insider",
  tag: "@appleinsider",
  isConfirmed: false,
  isFollow: false,
  descriptionInfo: `UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.`,
  location: "London, UK",
  site: "appleinsider.com",
  yearJoined: 2008,
  monthJoined: "May",
  avatar: `${publicUrl}/img/whotofollow/1.png`
};

const FollowersSrc = [
  `${publicUrl}/img/followers/1.png`,
  `${publicUrl}/img/followers/2.png`,
  `${publicUrl}/img/followers/3.png`,
  `${publicUrl}/img/followers/4.png`,
  `${publicUrl}/img/followers/5.png`,
  `${publicUrl}/img/followers/6.png`
];

const PhotosSrc = [
  `${publicUrl}/img/photos/1.png`,
  `${publicUrl}/img/photos/2.png`,
  `${publicUrl}/img/photos/3.png`,
  `${publicUrl}/img/photos/4.png`,
  `${publicUrl}/img/photos/5.png`,
  `${publicUrl}/img/photos/6.png`
];

const UserWallPosts = [
  {
    pinned: true,
    //написать скрипт, чтоб знал, что пиннед может быть только один
    date: "2 Mar 2015",
    text: `We've made some more resourses for all you wonderful #design folk everyinteraction.com/resourses/ #webdesign #UI`,
    //написать скрипт чтоб выделял ссылки и хештеги синим
    img: {
      src: process.env.PUBLIC_URL + "./img/post.png",
      alt: "post-pic"
    },
    info: {
      loves: "47",
      retweet: "17",
      comments: null
    }
  },
  {
    pinned: false,
    //написать скрипт, чтоб знал, что пиннед может быть только один
    date: "23h",
    text: `Our new website concept; Taking you from... @ Every Interaction instagram.com/p/BNFGrfhBP3M/`,
    //написать скрипт чтоб выделял ссылки и хештеги синим
    img: {
      src: "",
      alt: ""
    },
    info: {
      loves: "22",
      retweet: "11",
      comments: null
    }
  }
];
