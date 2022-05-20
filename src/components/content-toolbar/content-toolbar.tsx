import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";

export const ContentToolbar = () => {
  return (
    <div className="inline-flex gap-1 p-1">
      {[1, 1, 1, 1, 1].map((n, idx) => (
        <button key={idx} className="btn btn-outline btn-square btn-sm">
          <BeakerIcon className="text-white w-6 h-6" />
        </button>
      ))}
    </div>
  );
};
