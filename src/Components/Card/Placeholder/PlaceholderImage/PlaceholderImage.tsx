import { ReactElement } from "react";
import caravan from "./assets/caravan.webp";
import cowboy from "./assets/cowboy.webp";
import dino from "./assets/dino.webp";
import knight from "./assets/knight.webp";
import priest from "./assets/priest.webp";
import princess from "./assets/princess.webp";
import ship from "./assets/ship.webp";
import smuggler from "./assets/smuggler.webp";
import sunset from "./assets/sunset.webp";

const placeholderImgs = [
  caravan,
  cowboy,
  dino,
  knight,
  priest,
  princess,
  ship,
  smuggler,
  sunset,
];

function PlaceholderImage(): ReactElement {
  function placeholderPicker(): string {
    const randomizer = Math.floor(Math.random() * placeholderImgs.length);
    return placeholderImgs[randomizer];
  }

  return (
    <img
      className="absolute w-full h-full object-center object-cover"
      src={placeholderPicker()}
      loading="lazy"
      decoding="async"
      alt="Placeholder Img"
    />
  );
}

export default PlaceholderImage;
