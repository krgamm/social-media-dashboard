let style = getComputedStyle(document.body);
function generateCards() {}

let socialMedia = [
  {
    type: "Facebook",
    username: "@nathanf",
    followers: "1987",
    delta: 12,
    color: style.getPropertyValue("--Facebook"),
    pageViews: 87,
    likes: 52,
    pageViewsDelta: 3,
    likesDelta: -2,
  },
  {
    type: "Twitter",
    username: "@nathanf",
    followers: 1044,
    delta: 99,
    color: style.getPropertyValue("--Twitter"),
    retweets: 117,
    likes: 507,
    retweetsDelta: 303,
    likesDelta: 553,
  },
  {
    type: "Instagram",
    username: "@realnathanf",
    followers: "11k",
    delta: 1099,
    color: style.getPropertyValue("--Instagram"),
    likes: 5462,
    profileViews: "52k",
    likesDelta: 2257,
    profileViewsDelta: 1375,
  },
  {
    type: "YouTube",
    username: "Nathan F.",
    followers: 8293,
    delta: -144,
    color: style.getPropertyValue("--YouTube"),
    likes: 107,
    totalViews: 1407,
    likesDelta: -19,
    totalViewsDelta: -12,
  },
];

for (i = 0; i < socialMedia.length; i++) {
  console.log(socialMedia[i].type);
  console.log(socialMedia[i].color);
}
