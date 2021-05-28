import { Folder } from "../models/Folder";
import { GENERIC_FOLDER } from "./paths";

export const FOLDERS: Folder[] = [
  {
    name: "Drinks",
    images: [
      {
        src: "assets/drinks/Amphai 1.jpg",
        title: "Amphai",
        price: 20,
      },
    ],
    iconSrc: GENERIC_FOLDER,
  },
  {
    name: "Starters",
    images: [
      {
        src: "assets/starters/Papaya Pile.jpg",
        title: "Papaya Pile",
        price: 20,
      },
      {
        src: "assets/starters/Tom Yam Gung 6.jpg",
        title: "Tom Yam Gung",
        price: 20,
      },
    ],
    iconSrc: GENERIC_FOLDER,
  },
  {
    name: "Tacos",
    images: [
      {
        src: "assets/tacos/Taco 1.jpg",
        title: "Taco",
        price: 20,
      },
      {
        src: "assets/tacos/Taco 2.jpg",
        title: "Taco",
        price: 20,
      },
      {
        src: "assets/tacos/Taco 3.jpg",
        title: "Taco",
        price: 20,
      },
      {
        src: "assets/tacos/Taco 4.jpg",
        title: "Taco",
        price: 20,
      },
    ],
    iconSrc: GENERIC_FOLDER,
  },
  {
    name: "Main",
    iconSrc: GENERIC_FOLDER,
    images: [
      {
        src: "assets/main/Flirty Fish 1.jpg",
        title: "Flirty Fish",
        price: 20,
      },
      {
        src: "assets/main/Flirty Fish 2.jpg",
        title: "Flirty Fish 2",
        price: 20,
      },
      {
        src: "assets/main/Pad Thai 1.jpg",
        title: "Pad Thai",
        price: 20,
      },
      {
        src: "assets/main/Pad Thai 3.jpg",
        title: "Pad Thai",
        price: 30,
      },
    ],
  },
];
