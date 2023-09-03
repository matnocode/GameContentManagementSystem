import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import AddDialogPage from "./pages/addDialog/AddDialogPage";
import AddEditCharacter from "./pages/character/AddEditCharacter";
import Container from "./common/Container";
import DialogListPage from "./pages/addDialog/DialogListPage";
import { FC } from "react";
import MainPage from "./pages/MainPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<MainPage />} />
          <Route path="/*" element={<MainPage />} />
          <Route path="/dialogs" element={<DialogListPage />} />
          <Route path="/addDialog" element={<AddDialogPage />} />
          <Route path="/addCharacter" element={<AddEditCharacter />} />
          <Route path="/addDialog/:id" element={<AddDialogPage />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
