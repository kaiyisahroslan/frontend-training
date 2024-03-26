import { makeAutoObservable } from "mobx";
import { CountryDetails } from "../components/countryTypes";

class CountryStore {
  constructor() {
    makeAutoObservable(this);
  }

  countryDetailsData: CountryDetails[] = [];

  countryData = (param:any) => {
    return `https://restcountries.com/v3.1/${param}`
  }

  //call api with error
  fetchCountryData = async () => {
    try {
      const response = await fetch(this.countryData('all'));
      const countries = await response.json();
      this.countryDetailsData = countries;
    } catch (error) {
      console.log(error);
    }
  };
}

export const countryStore = new CountryStore();
