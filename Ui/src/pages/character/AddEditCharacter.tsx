import { FC, useEffect, useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import { addEditCharacter, getCharacter } from "../../api/character";

import Button from "../../common/Button";
import { Character } from "../../interfaces/character";
import CharacterImage from "../addDialog/components/CharacterImage";
import CustomToaster from "../../common/CustomToaster";
import Loader from "../../common/Loader";
import _ from "lodash";
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
    // toast.promise(AddCharacter({ name: name, iconUrl: src } as Character), {
    //   loading: LoadingRequest,
    //   success: SuccessUpdate,
    //   error: FailedRequest,
    // });
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
      <CustomToaster />
    </div>
  );
};

export default AddEditCharacter;
