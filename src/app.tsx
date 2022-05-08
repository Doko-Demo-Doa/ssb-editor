import { useState } from "react";
import { dialog, window as appWindow } from "@tauri-apps/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { invoke } from "@tauri-apps/api/tauri";

import { MainEditorRoute } from "./routes/main-editor/main-editor-route";

import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainEditorRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
