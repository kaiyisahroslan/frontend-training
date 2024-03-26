import * as React from "react";
import { useEffect, useState } from "react";
import { countryStore } from "../stores/countryStore";
import { CountryDetails } from "./countryTypes";

export const CountryTable = (props: CountryDetails) => {

  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    setCountries(countryStore.countryDetailsData as any);
  };

  useEffect(() => {
    (async ()=>{
      await countryStore.fetchCountryData()
    fetchCountryData();
    })(); // () - IIFE

  }, []);

  return (
    <>
      {countries.map((country: any, index: number) => {
        const { name, common, population, region, capital, flags} = country;

        return (
          <div>
            <div className="w-full">
              <div>
              <table className="table-fixed border-b w-full text-left">
                { index === 0 && <thead className="bg-black text-white h-4">
                  <tr>
                    <th></th>
                    <th>Population</th>
                    <th>Region</th>
                    <th>Capital</th>
                    <th>Country</th>
                    <th>Currency</th>
                  </tr>
                </thead>}
                <tbody className="align-middle">
                  <tr>
                    <td className="p-4 w-200">
                      <img
                        className="h-[50px] w-[100px] object-cover rounded-lg"
                        src={flags.png}
                        alt={common}
                      />
                    </td>
                    <td>{population}</td>
                    <td>{region}</td>
                    <td>{capital}</td>
                    <td>{name.common}</td>
                    <td>Currency</td>
                  </tr>
                </tbody>
              </table>
              </div>
              
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CountryTable;
