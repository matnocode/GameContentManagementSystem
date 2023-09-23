import "./styles/dialog.css";

import { FC, useState } from "react";
import { Form, FormLabel, FormSelect } from "react-bootstrap";

import Button from "../../common/Button";
import { Character } from "../../interfaces/character";
import CharacterImage from "./components/CharacterImage";
import { Dialog } from "../../interfaces/dialog";
import DialogItem from "./DialogItem";
import { Quest } from "../../interfaces/quest";
import { QuestAction } from "../../interfaces/questAction";
import { Swiper } from "swiper";
import { SwiperSlide } from "swiper/react";
import SwiperWrapper from "../../common/SwiperWrapper";
import _ from "lodash";
import classNames from "classnames";
import { getCharacters } from "../../api/character";
import { getQuests } from "../../api/quest";
import { useQuery } from "react-query";

const AddDialogPage: FC = () => {
  const data: Dialog[] = []; // getdialogs query
  const actions: QuestAction[] = [];
  const [dialogs, setDialogs] = useState<Dialog[] | undefined>(data);
  const [currentDialog, setCurrentDialog] = useState<number>(0);
  const [swiperObject, setSwiperObject] = useState<Swiper>();

  const { data: characters } = useQuery<Character[]>("getCharacters", () =>
    getCharacters()
  );
  const { data: quests } = useQuery<Quest[]>("getQuests", () => getQuests());

  const handleDeleteClick = (index: number) => {
    setDialogs(dialogs?.filter((_, i) => i != index));
  };

  const handleDialogValuesChange = (dialog: Dialog, index: number) =>
    setDialogs(dialogs?.map((prev, i) => (i === index ? dialog : prev)));

  return (
    <div>
      <Button to="/dialogs" className="my-2">
        ⬅ Back
      </Button>
      <Form className="d-flex flex-column gap-3 p-2">
        <div className="row gap-3">
          <div>
            <FormLabel className="fw-bold">Select Quest Type</FormLabel>
            <FormSelect>
              {quests?.map((q) => (
                <option key={q.id} value={q.id}>
                  {q.title}
                </option>
              ))}
            </FormSelect>
          </div>
          <div>
            <FormLabel className="fw-bold">Select Trigger Action</FormLabel>
            <FormSelect>
              {actions?.map((a) => (
                <option value={a.id}>{a.name}</option>
              ))}
            </FormSelect>
          </div>
        </div>
        <div className="d-flex justify-content-between sticky-top bg-white p-2 shadow-sm border">
          <Button
            onClick={() => {
              setDialogs([
                ...(dialogs ?? []),
                {
                  content: "",
                  speaker: { name: "", iconUrl: undefined } as Character,
                },
              ]);
            }}
          >
            ➕ Add chat
          </Button>
          <Button disabled={_.isEqual(data, dialogs)}>Save ✔️</Button>
        </div>

        <SwiperWrapper
          props={{
            pagination: { enabled: false },
            navigation: { enabled: false },
            onActiveIndexChange: (swiper) => {
              setCurrentDialog(swiper.activeIndex);
            },
            onInit: (swiper) => setSwiperObject(swiper),
            shortSwipes: false,
            longSwipesMs: 100,
            longSwipesRatio: 0.1,
          }}
          sliders={dialogs?.map((x, i) => (
            <SwiperSlide key={i}>
              <DialogItem
                key={`dialogItem-${i}`}
                dialog={x}
                characters={characters ?? []}
                handleDeleteClick={() => handleDeleteClick(i)}
                handleDialogValuesChange={handleDialogValuesChange}
                index={i}
              />
            </SwiperSlide>
          ))}
        >
          <div className="d-flex gap-1 mx-lg-5 border shadow-lg">
            {dialogs?.map((x, i) => (
              <div
                key={`bullet-${i}`}
                className={classNames(
                  "hoverElement",
                  currentDialog === i && "activeBullet"
                )}
                onClick={() => {
                  swiperObject?.slideTo(i, 700);
                  setCurrentDialog(i);
                }}
              >
                <CharacterImage src={x.speaker?.iconUrl} />
              </div>
            ))}
          </div>
        </SwiperWrapper>
      </Form>
    </div>
  );
};
export default AddDialogPage;
