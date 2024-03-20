/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

export function Dropdown() {
  return (
    <div className="group relative cursor-pointer py-4">
      <div className="flex items-center rounded-lg space-x-5 text-gray-500 bg-white px-4">
        <div className="menu-hover p-2 font-medium text-gray-500 lg:mx-4">
          Filter By Region
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          Sunday
        </a>

        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          Monday
        </a>
      </div>
    </div>
  );
}
export default Dropdown;
