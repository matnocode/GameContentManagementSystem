import { BaseItem } from "./item";
import { QuestAction } from "./questAction";
import { StoryChapter } from "./storyChapter";

export interface Quest {
  id: number;
  title: string;
  storyChapter: StoryChapter;
  questAction?: QuestAction;
  baseItem?: BaseItem;
}
