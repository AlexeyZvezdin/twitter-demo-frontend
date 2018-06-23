const publicUrl = process.env.PUBLIC_URL;

const UserData = {
  name: "Every Interaction",
  tag: "@EveryInteract",
  isConfirmed: true,
  isFollow: true,
  descriptionInfo: `UX Design studio focussed problem solving creativity. Design to us is
        how can we make things *work* amazing.`,
  location: "London, UK",
  site: "everyinteraction.com",
  yearJoined: 2008,
  monthJoined: "May",
  avatar: `${publicUrl}/img/ava.png`
};

const Followers = {
  one: `${publicUrl}/img/followers/1.png`,
  two: `${publicUrl}/img/followers/2.png`,
  three: `${publicUrl}/img/followers/3.png`,
  four: `${publicUrl}/img/followers/4.png`,
  five: `${publicUrl}/img/followers/5.png`,
  six: `${publicUrl}/img/followers/6.png`
};

export { UserData, Followers };
