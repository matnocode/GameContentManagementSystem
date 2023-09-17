import { RequestUrl } from "./character";
import { StoryChapter } from "../interfaces/storyChapter";

export const getStoryChapters = () => {
  return fetch(RequestUrl + "/getStoryChapters").then((x) => x.json());
};

export const getStoryChapter = (id: number) => {
  return fetch(RequestUrl + `/getStoryChapter?id=${id}`).then((x) => x.json());
};

export const deleteStoryChapter = (id: number) => {
  return fetch(RequestUrl + `/deleteStoryChapter?id=${id}`);
};

export const addEditStoryChapter = (storyChapter: StoryChapter) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  return fetch(RequestUrl + "/addEditStoryChapter", {
    method: "post",
    body: JSON.stringify(storyChapter),
    headers: headers,
  });
};
