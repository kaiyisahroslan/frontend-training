/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { useEffect, useState } from "react";

export interface ICountryCard {
  name: string;
  common: string;
  population: string;
  region: string;
  capital: string;
  flags: any;
}

export const CountryCard = (props: ICountryCard) => {
  const { name, common, population, region, capital, flags } = props;

  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
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
                    href="countryPage"
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
