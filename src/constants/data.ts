import { Folder } from "../models/Folder";

export const FOLDERS: Folder[] = [
  {
    name: "Drinks",
    images: [],
  },
  {
    name: "Tables",
    images: [],
  },
  {
    name: "Main Folder",
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
    ],
  },
];
