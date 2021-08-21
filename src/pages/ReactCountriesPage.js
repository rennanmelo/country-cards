import { useState } from "react";
import Countries from "../components/Countries";
import Country from "../components/Country";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/countries";

const ReactCountriesPage = () => {
  const [countryFilter, setCountryFilter] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

  const countryFilterTreated = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterTreated.length >= 3
      ? allCountries.filter(({ name }) => {
          const countryNameTreated = name.trim().toLocaleLowerCase();
          return countryNameTreated.includes(countryFilterTreated);
        })
      : allCountries;

  const handleCountryFilterChange = (newCountryFilter) => {
    setCountryFilter(newCountryFilter);
  };

  const toggleVisitedCountry = (countryId) => {
    let newVisitedCountries = [...visitedCountries];

    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter((visitedCountryId) => {
        return visitedCountryId !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountries(newVisitedCountries);
  };

  return (
    <>
      <Header>Countries cards</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Country name (with at least 3 characters)"
          inputValue={countryFilter}
          autoFocus
          onInputChange={handleCountryFilterChange}
        />

        <Countries>
          <h2 className="text-center font-semibold">
            {filteredCountries.length === 1
              ? "1 country found"
              : `${filteredCountries.length} countries found`}
          </h2>

          <h3 className="text-center font-semibold text-sm">
            {visitedCountries.length === 1
              ? "1 country visited"
              : `${visitedCountries.length} countries visited`}
          </h3>

          {filteredCountries.map((country) => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;

            return (
              <Country
                key={country.id}
                isVisited={isVisited}
                onCountryClick={toggleVisitedCountry}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </>
  );
};

export default ReactCountriesPage;
