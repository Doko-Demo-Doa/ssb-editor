import { IconTyping } from "../../types";
import { CustomIcon } from "../icon/custom-icon";

const toolbar1Icons: Array<{ iconName: IconTyping; tooltip?: string }> = [
  {
    iconName: "text-bold",
    tooltip: "Make the selected text bold",
  },
  {
    iconName: "text-italic",
    tooltip: "Test 1",
  },
  {
    iconName: "text-underline",
    tooltip: "Test 2",
  },
  {
    iconName: "text-color-primary",
    tooltip: "Test 2",
  },
];

export const ContentToolbar = () => {
  return (
    <div className="flex flex-col ">
      <div className="inline-flex items-center gap-3 p-1">
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text">Comment</span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>

        <select className="select select-bordered select-sm w-full max-w-xs">
          <option disabled selected>
            Choose style
          </option>
          <option>TL-sign</option>
          <option>Dialog-alt</option>
        </select>

        <input
          type="text"
          placeholder="Actor"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </div>

      <div className="inline-flex items-center gap-1 p-1">
        {toolbar1Icons.map((n, idx) => (
          <div
            key={idx}
            className="tooltip tooltip-bottom"
            data-tip={n.tooltip}
          >
            <button className="btn btn-outline btn-square btn-sm">
              <CustomIcon
                iconName={n.iconName}
                className="text-white w-6 h-6"
              />
            </button>
          </div>
        ))}

        <div className="divider-horizontal"></div>

        <div className="form-control">
          <label className="label cursor-pointer gap-3">
            <span className="label-text">Time</span>
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-red-500"
              checked
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer gap-3">
            <span className="label-text">Frame</span>
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>
      </div>
    </div>
  );
};
