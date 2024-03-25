import React from "react";
import "./Main.css";
import SearchBar from "./components/search";
import Dropdown from "./components/dropdown";
import CountryCard from "../src/components/CountryCard";
import Header from "./components/header";
import CountryTable from "./components/CountryTable";

function Main() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-white">
          <Header></Header>
        </div>

        <div className="container mx-auto">
        <div className="flex justify-between">
            <SearchBar></SearchBar>
            <Dropdown></Dropdown>
          </div>
          <div className="flex flex-wrap justify-center">
            <CountryTable name={""} common={""} population={""} region={""} capital={""} flags={""} currency={""}></CountryTable>
            <CountryCard name={""} common={""} population={""} region={""} capital={""} flags={""}></CountryCard>
          </div>
        </div>

      </div>
    </>
  );
}

export default Main;
