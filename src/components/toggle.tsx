import * as React from "react";

export function Toggle() {
  return (
    <label className="relative mb-5 cursor-pointer items-end">
      <input type="checkbox" value="" className="peer sr-only" />
      <div className="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
    </label>
  );
}

export default Toggle;
