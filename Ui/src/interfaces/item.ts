import { Character } from "./character";

export interface BaseItem {
  item?: Item;
  character?: Character;
}

export interface Item {
  id: number;
  name: string;
}
