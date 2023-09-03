import { Character } from "../interfaces/character";

export const RequestUrl = "https://localhost:5001/api/data";

export const SuccessUpdate = "✔️Updated Successfully";
export const SuccessAdd = "✔️Added Successfully";
export const SuccessRemove = "🗑️Removed Successfully";

export const FailedRequest = "❌Something went wrong";

export const LoadingRequest = "⌛Loading...";

export const AddCharacter = (character: Character) => {
  return fetch(RequestUrl + "/addCharacter", {
    body: JSON.stringify(character),
  });
};
