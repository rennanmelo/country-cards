import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/countries";

const ReactCountriesPage = () => {
  const [countryFilter, setCountryFilter] = useState("");

  const handleCountryFilterChange = (newCountryFilter) => {
    setCountryFilter(newCountryFilter);
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
      </Main>
    </>
  );
};

export default ReactCountriesPage;
