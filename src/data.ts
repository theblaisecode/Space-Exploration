import moon from "./assets/destination/image-moon.webp";
import mars from "./assets/destination/image-mars.webp";
import europa from "./assets/destination/image-europa.webp";
import titan from "./assets/destination/image-titan.webp";

export const webNav: {
  id: number;
  number: string;
  info: string;
  url: string;
  ariaLabel: string;
}[] = [
  {
    id: 1,
    number: "00",
    info: "home",
    url: "/",
    ariaLabel: `Link to home page`,
  },
  {
    id: 2,
    number: "01",
    info: "destination",
    url: "/destination",
    ariaLabel: `Link to destination page`,
  },
  {
    id: 3,
    number: "02",
    info: "crew",
    url: "/crew",
    ariaLabel: `Link to crew page`,
  },
  {
    id: 4,
    number: "03",
    info: "technology",
    url: "/technology",
    ariaLabel: `Link to technology page`,
  },
];

export const destination: {
  id: number;
  tabName: string;
  img: string;
  imgAlt:string;
  heading: string;
  tabContent: string;
  distance: string;
  travelTime: string;
}[] = [
  {
    id: 1,
    tabName: "moon",
    img: moon,
    imgAlt: "moon",
    heading: "moon",
    tabContent:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },
  // {
  //   id: 2,
  //   tabName: "mars",
  //   img: mars,
  //   imgAlt: "mars",
  //   heading: "mars",
  //   tabContent:
  //     "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  //   distance: "225 MIL. km",
  //   travelTime: "9 months",
  // },
  // {
  //   id: 3,
  //   tabName: "europa",
  //   img: europa,
  //   imgAlt: "europa",
  //   heading: "europa",
  //   tabContent:
  //     "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  //   distance: "628 MIL. km",
  //   travelTime: "3 years",
  // },
  // {
  //   id: 4,
  //   tabName: "titan",
  //   img: titan,
  //   imgAlt: "itian",
  //   heading: "titan",
  //   tabContent:
  //     "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  //   distance: "1.6 BIL. km",
  //   travelTime: "7 years",
  // },
];
