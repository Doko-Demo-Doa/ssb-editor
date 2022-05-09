import React from "react";

import { MainLayout } from "../main-layout";

export const MainEditorRoute = () => {
  return (
    <MainLayout>
      <div className="main-editor-route bg-yellow-100 w-full">
        <div className="inline-flex w-full">
          <div className="h-96 aspect-[16/9] bg-slate-400">Video Frame</div>
          <div className="grow bg-red-200">Editor</div>
        </div>

        <div className="w-full bg-red-300 columns-1">Editor</div>
      </div>
    </MainLayout>
  );
};
