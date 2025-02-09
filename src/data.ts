import moon from "./assets/destination/image-moon.webp";
import mars from "./assets/destination/image-mars.webp";
import europa from "./assets/destination/image-europa.webp";
import titan from "./assets/destination/image-titan.webp";
import crewImg1 from "./assets/crew/image-douglas-hurley.webp";
import crewImg2 from "./assets/crew/image-mark-shuttleworth.webp";
import crewImg3 from "./assets/crew/image-victor-glover.webp";
import crewImg4 from "./assets/crew/image-anousheh-ansari.webp";
import techImg1 from "./assets/technology/image-launch-vehicle-portrait.jpg";
import techImg2 from "./assets/technology/image-spaceport-portrait.jpg";
import techImg3 from "./assets/technology/image-space-capsule-portrait.jpg";

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
  imgAlt: string;
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
  {
    id: 2,
    tabName: "mars",
    img: mars,
    imgAlt: "mars",
    heading: "mars",
    tabContent:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! Let's go!",
    distance: "225 MIL. km",
    travelTime: "9 months",
  },
  {
    id: 3,
    tabName: "europa",
    img: europa,
    imgAlt: "europa",
    heading: "europa",
    tabContent:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    travelTime: "3 years",
  },
  {
    id: 4,
    tabName: "titan",
    img: titan,
    imgAlt: "itian",
    heading: "titan",
    tabContent:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    travelTime: "7 years",
  },
];

export const crew: {
  id: number;
  jobTitle: string;
  crewName: string;
  crewInfo: string;
  crewImg: string;
  crewImgAlt: string;
}[] = [
  {
    id: 1,
    jobTitle: "commander",
    crewName: "Douglas Hurley",
    crewInfo:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    crewImg: crewImg1,
    crewImgAlt: "image of Douglas Hurley",
  },
  // {
  //   id: 2,
  //   jobTitle: "mission specialist",
  //   crewName: "Mark Shuttleworth",
  //   crewInfo:
  //     "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  //   crewImg: crewImg2,
  //   crewImgAlt: "image of Mark Shuttleworth",
  // },
  // {
  //   id: 3,
  //   jobTitle: "pilot",
  //   crewName: "Victor Glover",
  //   crewInfo:
  //     "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  //   crewImg: crewImg3,
  //   crewImgAlt: "image of Victor Glover",
  // },
  // {
  //   id: 4,
  //   jobTitle: "flight engineer",
  //   crewName: "Anousheh Ansari",
  //   crewInfo:
  //     "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  //   crewImg: crewImg4,
  //   crewImgAlt: "image of Anousheh Ansari",
  // },
];

export const technology: {
  id: number;
  stage: string;
  info: string;
  techImg: string;
  techImgAlt: string;
}[] = [
  {
    id: 1,
    stage: "launch vehicle",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    techImg: techImg1,
    techImgAlt: "image of launch vehicle",
  },
  {
    id: 2,
    stage: "spaceport",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    techImg: techImg2,
    techImgAlt: "image of spaceport",
  },
  {
    id: 3,
    stage: "space capsule",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    techImg: techImg3,
    techImgAlt: "image of space capsule",
  },
];
