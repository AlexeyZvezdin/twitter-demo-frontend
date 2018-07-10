const publicUrl = process.env.PUBLIC_URL;

const FollowersSrc = [
  `${publicUrl}/img/EveryInteract/followers/1.png`,
  `${publicUrl}/img/EveryInteract/followers/2.png`,
  `${publicUrl}/img/EveryInteract/followers/3.png`,
  `${publicUrl}/img/EveryInteract/followers/4.png`,
  `${publicUrl}/img/EveryInteract/followers/5.png`,
  `${publicUrl}/img/EveryInteract/followers/6.png`
];

const PhotosSrc = [
  `${publicUrl}/img/EveryInteract/photos/1.png`,
  `${publicUrl}/img/EveryInteract/photos/2.png`,
  `${publicUrl}/img/EveryInteract/photos/3.png`,
  `${publicUrl}/img/EveryInteract/photos/4.png`,
  `${publicUrl}/img/EveryInteract/photos/5.png`,
  `${publicUrl}/img/EveryInteract/photos/6.png`
];

const UserWallPosts = [
  {
    pinned: true,
    //написать скрипт, чтоб знал, что пиннед может быть только один
    date: "2 Mar 2015",
    text: `We've made some more resourses for all you wonderful #design folk everyinteraction.com/resourses/ #webdesign #UI`,
    //написать скрипт чтоб выделял ссылки и хештеги синим
    img: {
      src: process.env.PUBLIC_URL + "./img/EveryInteract/post.png",
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
//Не так, придется брать данные из других профилей
const WhoToFollow = [
  // {
  //   ava: {
  //     src: JSON.parse(`process.env.PUBLIC_URL/EveryInteract.json`, function(
  //       key,
  //       value
  //     ) {
  //       key === "avatar" ? value : "";
  //     }),
  //     alt: "EveryInteractAva"
  //   },
  //   name: {
  //     name: "EveryInteract",
  //     tag: "@everyinteract"
  //   },
  //   link: "/EveryInteract"
  //   // isConfirmed: EveryInteract.isConfirmed
  // },
  {
    ava: {
      src: `${publicUrl}/img/AppleInsider/Ava.png`,
      alt: "AppleInsiderAva"
    },
    name: {
      name: "AppleIsider",
      tag: "@appleinsider"
    },
    link: "/appleinsider"
    // isConfirmed: AppleInsider.isConfirmed
  }
  // {
  //   ava: {
  //     src: `${publicUrl}/img/whotofollow/2.png`,
  //     alt: "CreodeAva"
  //   },
  //   name: {
  //     name: "Creode",
  //     tag: "@Creode"
  //   },
  //   link: "/creode"
  //   // isConfirmed: Creode.isConfirmed
  // },
  // {
  //   ava: {
  //     src: `${publicUrl}/img/whotofollow/3.png`,
  //     alt: "EpiphanyAva"
  //   },
  //   name: {
  //     name: "Epiphany Search",
  //     tag: "@EpiphanySearch"
  //   },
  //   link: "/epiphanysearch"
  //   // isConfirmed: EpiphanySearch.isConfirmed
  // }
];

export { FollowersSrc, PhotosSrc, UserWallPosts, WhoToFollow };
