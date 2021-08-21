import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/countries";

const ReactCountriesPage = () => {
  return (
    <>
      <Header>Countries cards</Header>
      <Main>
        My main
        <TextInput />
      </Main>
    </>
  );
};

export default ReactCountriesPage;
