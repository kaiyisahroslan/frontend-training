import * as React from "react";
import { useEffect, useState } from "react";
import { countryStore } from "../stores/countryStore";
import { CountryDetails } from "./countryTypes";

export const CountryCard = (props: CountryDetails) => {
  const { name, common, population, region, capital, flags } = props;

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
      {countries.map((country :any) => {
        const { name, common, population, region, capital, flags } = country;

        return (
          <div key={name}>
            <div className="m-3 bg-slate-50 rounded-lg">
                <img className='h-[150px] w-[300px] object-cover rounded-t-lg' src={flags.png} alt={common} />
              <div className="card-body p-5">
                <h2 className="card-title">
                  <a
                    href={name.common}
                    className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                  >
                    {name.common}
                  </a>
                </h2>
                <div>Population: {population}</div>
                <div>Region: {region}</div>
                <div>Capital: {capital}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CountryCard;
