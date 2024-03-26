import CountryTable from "../components/CountryTable";
import Dropdown from "../components/dropdown";
import SearchBar from "../components/search";
import {Toggle} from "../components/toggle";

export function TableView() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto p-4 bg-white">
          Countries Table View
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between">
          <SearchBar></SearchBar>
          <Dropdown></Dropdown>
          <Toggle></Toggle>
        </div>
        <div className="flex flex-wrap justify-center">
          <CountryTable
            name={""}
            common={""}
            population={""}
            region={""}
            capital={""}
            flags={undefined}
          ></CountryTable>
        </div>
      </div>
    </>
  );
}

export default TableView;
