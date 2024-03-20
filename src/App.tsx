// <// /* eslint-disable jsx-a11y/alt-text */
// // import React, { useEffect, useState } from 'react';
// // import CountryCard from './components/countryCard';

// // export const Fetch = () => {
// //   const [countryData, setCountryData] = useState([]);

// //   useEffect(() => {
// //     fetch('https://restcountries.com/v3.1/all')
// //       .then((res) => {
// //         return res.json();
// //       })
// //       .then((data) => {
// //         console.log(data);
// //         setCountryData(data);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       {countryData.map((country) => (
// //         <CountryCard {...country} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default Fetch;

// import React, {useState, useEffect} from 'react';

// const url = 'https://restcountries.com/v3.1/all'

// const Countries = () => {
//     const [countries, setCountries] = useState([])

//     const fetchCountryData = async() => {
//             const response = await fetch(url)
//             const countries = await response.json()
//             setCountries(countries)
//             console.log(countries)
//     }

//     useEffect(() => {
//         fetchCountryData()
//     }, [])
        

//     return (
//         <>
//         {countries.map((country) => {
//             const { id } = CountQueuingStrategy
//             return (
//                 <article key={id}>Country Data</article>
//             )
//         })}
//         </>
//     )
// }

// export default Countries;
export {}