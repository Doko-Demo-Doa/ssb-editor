import React from "react";

import { MainLayout } from "../main-layout";

export const MainEditorRoute = () => {
  return (
    <MainLayout>
      <div className="main-editor-route w-full md:w-32 lg:w-48">
        <div className="h-96 aspect-[16/9] bg-slate-400">Video Frame</div>
        <div className="w-full bg-red-300">Editor</div>
      </div>
    </MainLayout>
  );
};
