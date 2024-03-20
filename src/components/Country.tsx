import * as React from 'react';
import CountryCard, { ICountryCard } from './CountryCard';
import { map } from 'lodash';

export function Country() {
    const variantArray: ICountryCard[] = [
        {
            common: '',
            population: '',
            region: '',
            capital: '',
            flag: '',
        },
    ];

    return (
        <div>
            {map(variantArray, (item) => (
                <CountryCard {...item}/>
            ))}
        </div>
    )
}

export default Country;