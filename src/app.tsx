import { dialog, window as appWindow } from "@tauri-apps/api";
import { MantineProvider, Button } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { invoke } from "@tauri-apps/api/tauri";

import { MainEditorRoute } from "./routes/main-editor/main-editor-route";

import "./app.css";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainEditorRoute />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
