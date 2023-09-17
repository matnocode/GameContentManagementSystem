import Button from "../common/Button";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <div>
      <h3 className="text-center">Game Content Management System</h3>
      <hr />
      <div className="d-flex flex-column gap-3">
        <Button to="storyChapters">
          <div className="row justify-content-center">
            📄
            <span className="col-10 col-lg-2 text-start">
              Manage Story Chapters
            </span>
          </div>
        </Button>
        <Button to="quests">
          <div className="row justify-content-center align-items-center">
            📍
            <span className="col-10 col-lg-2 text-start">Manage Quests</span>
          </div>
        </Button>
        <Button to="characters">
          <div className="row justify-content-center">
            👤
            <span className="col-10 col-lg-2 text-start">
              Manage Characters
            </span>
          </div>
        </Button>
        <Button to="dialogs">
          <div className="row justify-content-center">
            👄
            <span className="col-10 col-lg-2 text-start">Manage Dialogs</span>
          </div>
        </Button>
        <Button to="items">
          <div className="row justify-content-center">
            ⚔️
            <span className="col-10 col-lg-2 text-start">Manage Items</span>
          </div>
        </Button>
        <Button to="actions">
          <div className="row justify-content-center">
            🤾‍♂️
            <span className="col-10 col-lg-2 text-start">
              Manage Quest Actions
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
