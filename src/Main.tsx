import React from "react";
import "./Main.css";
import SearchBar from "./components/search";
import Dropdown from "./components/dropdown";
import CountryCard from "../src/components/CountryCard";

function Main() {
  return (
    <>
    <div className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto">
          <div className='flex mx-auto '>
            <SearchBar></SearchBar>
            <Dropdown></Dropdown>
          </div>
          <CountryCard name={''} common={''} population={''} region={''} capital={''} flag={''}></CountryCard>
        </div>
        </div>
    </>
  );
}

export default Main;
