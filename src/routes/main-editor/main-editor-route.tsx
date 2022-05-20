import { invoke } from "@tauri-apps/api";
import { ContentInput } from "../../components/content-input/content-input";
import { ContentToolbar } from "../../components/content-toolbar/content-toolbar";
import { StatusBar } from "../../components/status-bar/status-bar";
import { SubLines } from "../../components/sub-lines/sub-lines";
import { VideoFrame } from "../../components/video-frame/video-frame";
import { MainLayout } from "../main-layout";

export const MainEditorRoute = () => {
  function injoker() {
    invoke("plugin:launch|launch_exec");
  }

  return (
    <MainLayout>
      <div className="main-editor-route w-full h-full flex flex-col">
        <div className="inline-flex w-full h-96">
          <div className="h-96 aspect-[16/9]">
            <VideoFrame />
          </div>
          <div className="h-96 w-full p-2 flex flex-col">
            <ContentToolbar />
            <ContentInput />
          </div>
        </div>

        <div
          className="bottom-area w-full flex justify-between flex-col h-[calc(100vh_-_24em)]"
          onClick={() => injoker()}
        >
          <SubLines />
          <StatusBar />
        </div>
      </div>
    </MainLayout>
  );
};
