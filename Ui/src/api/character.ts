import { Character } from "../interfaces/character";

export const RequestUrl = "https://localhost:5001/api/data";

export const SuccessUpdate = "Updated Successfully";
export const SuccessAdd = "Added Successfully";
export const SuccessRemove = "Removed Successfully 🗑️";

export const FailedRequest = "Something went wrong ❌";

export const LoadingRequest = "Loading... ⌛";

export const addEditCharacter = (character: Character) => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  return fetch(RequestUrl + "/addCharacter", {
    method: "post",
    body: JSON.stringify(character),
    headers: headers,
  });
};

export const getCharacters = () => {
  return fetch(RequestUrl + "/getCharacters").then((x) => x.json());
};

export const getCharacter = (id: number) => {
  return fetch(RequestUrl + `/getCharacter?id=${id}`).then((x) => x.json());
};

export const deleteCharacter = (id: number) => {
  return fetch(RequestUrl + `/deleteCharacter?id=${id}`, { method: "delete" });
};
