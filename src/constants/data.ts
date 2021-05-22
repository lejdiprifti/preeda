import { Folder } from "../models/Folder";
import { GENERIC_FOLDER } from "./paths";

export const FOLDERS: Folder[] = [
  {
    name: "Drinks",
    images: [],
    position: { x: 20, y: -23 },
    iconSrc: GENERIC_FOLDER,
  },
  {
    name: "Food",
    images: [],
    position: { x: -97, y: -80 },
    iconSrc: GENERIC_FOLDER,
  },
  {
    name: "Main",
    position: { x: 10, y: -13 },
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
        title: "Pad Thai 1",
        price: 20,
      },
    ],
  },
];
