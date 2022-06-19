import image0 from "./image-launch-vehicle-portrait.jpg";
import image0Mobile from "./image-launch-vehicle-landscape.jpg";
import image1 from "./image-spaceport-portrait.jpg";
import image1Mobile from "./image-spaceport-landscape.jpg";
import image2 from "./image-space-capsule-portrait.jpg";
import image2Mobile from "./image-space-capsule-landscape.jpg";

export default [
  {
    name: "Launch vehicle",
    img: {
      portrait: image0,
      landscape: image0Mobile,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    img: {
      portrait: image1,
      landscape: image1Mobile,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    img: {
      portrait: image2,
      landscape: image2Mobile,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
