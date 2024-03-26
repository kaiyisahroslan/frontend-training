import * as React from "react";
import { useState } from "react";

export const Toggle = (props: any) => {

  const [toggle, setToggle] = useState(false as boolean);
  const handleClick = () => {
    setToggle(!toggle)
    console.log(toggle)
  };
  
  return (
    <div className="content-center">
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value={props.toggleSwitch} className="sr-only peer" onChange={handleClick}/>
        <div className="font-medium text-gray-500"> Table </div>
        <div className="ms-3 relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <div className="ms-3 font-medium text-gray-500"> Card </div>
      </label>
    </div>
  );
}
