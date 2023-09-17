import { FC, useEffect, useState } from "react";
import {
  FailedRequest,
  LoadingRequest,
  SuccessUpdate,
  addEditCharacter,
  getCharacter,
} from "../../api/character";
import { Form, FormControl, FormLabel } from "react-bootstrap";

import Button from "../../common/Button";
import { Character } from "../../interfaces/character";
import CharacterImage from "../addDialog/components/CharacterImage";
import Loader from "../../common/Loader";
import _ from "lodash";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const AddEditCharacter: FC = () => {
  const [iconUrl, setIconUrl] = useState("");
  const [name, setName] = useState("");

  const { id } = useParams();
  const { data, isLoading, remove } = useQuery<Character>(
    "getCharacter",
    () => getCharacter(Number(id) ?? -1),
    { refetchOnReconnect: false, refetchOnWindowFocus: false }
  );

  const handleAddEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(
      addEditCharacter({
        name: name,
        iconUrl: iconUrl,
        id: id ?? -1,
      } as Character),
      {
        loading: LoadingRequest,
        success: SuccessUpdate,
        error: FailedRequest,
      }
    );
    await addEditCharacter({
      name: name,
      iconUrl: iconUrl,
      id: data?.id ?? undefined,
    } as Character);
  };

  useEffect(() => {
    if (data !== undefined) {
      setIconUrl(data?.iconUrl ?? "");
      setName(data?.name ?? "");
    }
  }, [data]);

  useEffect(() => () => remove(), []);

  return (
    <div className="py-3">
      <Button to="/characters">⬅ Back</Button>
      <div className="h3 text-center ">Add new character</div>
      {!isLoading ? (
        <Form
          className="d-flex flex-column gap-3 w-50 m-auto"
          onSubmit={handleAddEdit}
        >
          <Button className="my-3" type="submit">
            Save ✔️
          </Button>
          <div>
            <FormLabel>Name</FormLabel>
            <FormControl
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <FormLabel>Icon Url</FormLabel>
            <div className="d-flex gap-2 ">
              <FormControl
                value={iconUrl}
                type="text"
                onChange={(e) => setIconUrl(e.target.value)}
              />
              <CharacterImage src={iconUrl} />
            </div>
          </div>
        </Form>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AddEditCharacter;
