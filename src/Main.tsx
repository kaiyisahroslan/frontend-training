import React, { useState } from "react";
import "./Main.css";
import SearchBar from "./components/search";
import Dropdown from "./components/dropdown";
import CountryTable from "./components/CountryTable";
import CountryCard from "./components/CountryCard";
import CountryPage from "./components/CountryPage";

function Main() {

  const [toggle, setToggle] = useState(false as any);

  const toggleButton = () => {
    
    const handleClick = () => {
      setToggle(!toggle)
      console.log(toggle)
    };
    
    return (
      <div className="content-center">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value={toggle} className="sr-only peer" onChange={handleClick}/>
          <div className="ms-3 font-medium text-gray-500"> Table </div>
          <div className="ms-3 relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <div className="ms-3 font-medium text-gray-500"> Card </div>
        </label>
      </div>
    );
  }

  const countryView = () => {
    if (toggle === false) {
      return (
        <div className="flex flex-wrap justify-center">
            <CountryTable
              name={""}
              common={""}
              population={""}
              region={""}
              capital={""}
              flags={""}
            ></CountryTable>
          </div>
    )} else {
      return (
      <div className="flex flex-wrap justify-center">
      <CountryCard
        name={""}
        common={""}
        population={""}
        region={""}
        capital={""}
        flags={""}
      ></CountryCard>
    </div>
    )}
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-white">
          <div className="container mx-auto p-4 bg-white">
            Countries View    
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex justify-between">
            <SearchBar></SearchBar>
            <Dropdown></Dropdown>
            {toggleButton()}
          </div>

          {countryView()}

        </div>
      </div>
    </>
  );
}

export default Main;
