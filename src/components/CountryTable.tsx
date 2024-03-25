import * as React from "react";
import { useEffect, useState } from "react";

export interface ICountryTable {
  name: string;
  common: string;
  population: string;
  region: string;
  capital: string;
  flags: any;
  currency: string;
}

export const CountryTable = (props: ICountryTable) => {
  const { name, common, population, region, capital, flags, currency } = props;

  const [countries1, setCountries1] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries1 = await response.json();
    setCountries1(countries1);
    console.log(countries1);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      {countries1.map((country1: any) => {
        const { name, common, population, region, capital, flags, currency } = country1;

        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th className="px-4 py-2"> </th>
                  <th className="px-4 py-2">Population</th>
                  <th className="px-4 py-2">Region</th>
                  <th className="px-4 py-2">Capital</th>
                  <th className="px-4 py-2">Country</th>
                  <th className="px-4 py-2">Currency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2"><img className='h-[25px] w-[50px] object-cover rounded-lg' src={flags.png} alt={common} /></td>
                  <td className="border px-4 py-2">{population}</td>
                  <td className="border px-4 py-2">{region}</td>
                  <td className="border px-4 py-2">{capital}</td>
                  <td className="border px-4 py-2">{name.common}</td>
                  <td className="border px-4 py-2">{currency}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default CountryTable;
