import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";

export const ContentToolbar = () => {
  return (
    <div className="flex flex-col ">
      <div className="inline-flex items-center gap-1 p-1">
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text">Comment</span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>

        <select className="select select-bordered select-sm w-full max-w-xs">
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </div>

      <div className="inline-flex gap-1 p-1">
        {[1, 1, 1, 1, 1].map((n, idx) => (
          <button key={idx} className="btn btn-outline btn-square btn-sm">
            <BeakerIcon className="text-white w-6 h-6" />
          </button>
        ))}
      </div>
    </div>
  );
};
