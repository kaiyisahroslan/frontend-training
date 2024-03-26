import * as React from "react";
import { useState, useEffect } from "react";
import { countryStore } from "../stores/countryStore";
import { CountryDetails } from "./countryTypes";

export const CountryPage = (props: CountryDetails) => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    setCountries(countryStore.countryDetailsData as any);
  };

  useEffect(() => {
    (async () => {
      await countryStore.fetchCountryData();
      fetchCountryData();
    })(); // () - IIFE
  }, []);

  return (
    <>
      {countries.map((country: any) => {
        const {
          name,
          common,
          population,
          region,
          capital,
          flags,
          official,
          subregion,
          languages,
          borders,
          tld,
        } = country;

        return (
          <div key={name}>
            <div>
              <img
                className="h-[200px] w-[350px]"
                src={flags.png}
                alt={common}
              />
              <div>
                <h1>
                  <a
                    href="countryPage"
                    className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 inline-block"
                  >
                    {name.common}
                  </a>
                </h1>
                <div>
                  <div>Official Name: {name.official}</div>
                  <div>Population: {population}</div>
                  <div>Region: {region}</div>
                  <div>Sub Region: {subregion}</div>
                  <div>Capital: {capital}</div>
                  <div>Top Level Domain: {tld}</div>
                  <div>Currencies: currency</div>
                  <div>Languages: languages</div>
                  <div>Border Countries: borders</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CountryPage;
