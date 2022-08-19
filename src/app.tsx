import { lazy, Suspense } from "react";
import { dialog, window as appWindow } from "@tauri-apps/api";
import { MantineProvider, Skeleton } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { invoke } from "@tauri-apps/api/tauri";

import { MainEditorRoute } from "@/routes/main-editor/main-editor-route";

const ModalRegistry = lazy(() => import("@/components/modals/modal-registry"));

import "./app.css";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <Suspense fallback={<Skeleton />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainEditorRoute />} />
          </Routes>
        </BrowserRouter>

        <ModalRegistry />
      </Suspense>
    </MantineProvider>
  );
}

export default App;
