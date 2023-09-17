export enum QuestType {
  "FirstQuest",
  "SecondQuest",
  "ThirdQuest",
}

export interface Quest {
  id: number;
  name: string;
  questType: QuestType;
}
