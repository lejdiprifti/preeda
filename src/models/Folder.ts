import { Image } from "./Image";
import { Position } from "./Position";

export interface Folder {
  name: string;
  images: Image[];
  iconSrc: string;
  position: Position;
}
