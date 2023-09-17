import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import AddDialogPage from "./pages/addDialog/AddDialogPage";
import AddEditCharacter from "./pages/character/AddEditCharacter";
import AddEditQuest from "./pages/quest/AddEditQuest";
import CharacterList from "./pages/character/CharacterList";
import Container from "./common/Container";
import DialogListPage from "./pages/addDialog/DialogListPage";
import { FC } from "react";
import MainPage from "./pages/MainPage";
import QuestList from "./pages/quest/QuestList";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<MainPage />} />
            <Route path="/*" element={<MainPage />} />
            <Route path="/dialogs" element={<DialogListPage />} />
            <Route path="/addDialog" element={<AddDialogPage />} />
            <Route path="/addDialog/:id" element={<AddDialogPage />} />
            <Route path="/addCharacter" element={<AddEditCharacter />} />
            <Route path="/addCharacter/:id" element={<AddEditCharacter />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/quests" element={<QuestList />} />
            <Route path="/addQuest/:id" element={<AddEditQuest />} />
            <Route path="/addQuest" element={<AddEditQuest />} />
          </Route>
        </Routes>
        <Toaster />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
