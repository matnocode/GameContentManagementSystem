import { Quest } from "../interfaces/quest";
import { RequestUrl } from "./character";

export const getQuests = async () => {
  return await fetch(RequestUrl + "/getQuests").then((x) => x.json());
};

export const getQuest = (id: number) => {
  return fetch(RequestUrl + `/getQuest?id=${id}`).then((x) => x.json());
};

export const deleteQuest = () => {
  return fetch(RequestUrl + "/deleteQuest");
};

export const addEditQuest = (quest: Quest) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  return fetch(RequestUrl + "/addEditQuest", {
    method: "post",
    body: JSON.stringify(quest),
    headers: headers,
  });
};
