/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

export interface ICountryCard {
  name: string;
  common: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
}

export const CountryCard = (props: ICountryCard) => {
  const { name, common, population, region, capital, flag } = props;

  return (
    <>
      <div className="items-start p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt={name}
            />
            <img src={flag} />
            <div className="p-4 pt-2">
              <div className="mb-8">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  {common}
                </a>
                <p className="text-gray-700 text-sm">
                  Population: {population}
                </p>
                <p className="text-gray-700 text-sm">Region: {region}</p>
                <p className="text-gray-700 text-sm">Capital: {capital}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
