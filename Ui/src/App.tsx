import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddDialogPage from "./pages/addDialog/AddDialogPage";
import Container from "./common/Container";
import { FC } from "react";
import MainPage from "./pages/MainPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<MainPage />} />
          <Route path="/*" element={<MainPage />} />
          <Route path="/addDialog" element={<AddDialogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
