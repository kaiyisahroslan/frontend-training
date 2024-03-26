import CountryCard from "../components/CountryCard";
import Dropdown from "../components/dropdown";
import SearchBar from "../components/search";
import {Toggle} from "../components/toggle";

export function CardView() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto p-4 bg-white">
          Countries Card View
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between">
          <SearchBar></SearchBar>
          <Dropdown></Dropdown>
          <Toggle></Toggle>
        </div>
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
      </div>
    </>
  );
}

export default CardView;
