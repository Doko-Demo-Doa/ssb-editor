import { invoke } from "@tauri-apps/api";
import { ContentInput } from "../../components/content-input/content-input";
import { ContentToolbar } from "../../components/content-toolbar/content-toolbar";
import { MainLayout } from "../main-layout";

export const MainEditorRoute = () => {
  function injoker() {
    invoke("plugin:launch|launch_exec");
  }

  return (
    <MainLayout>
      <div className="main-editor-route w-full">
        <div className="inline-flex w-full h-full bg-yellow-100">
          <div className="h-96 aspect-[16/9] bg-slate-400">Video Frame</div>
          <div className="h-80 w-full bg-red-200">
            <ContentToolbar />
            <ContentInput />
          </div>
        </div>

        <div className="w-full bg-red-300 columns-1" onClick={() => injoker()}>
          Click
        </div>
      </div>
    </MainLayout>
  );
};
