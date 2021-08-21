import ItemList from "./ItemList";

const Country = ({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) => {
  const { flag, name, capital, region, population, area } = country;
  const isVisitedClassName = isVisited ? "bg-green-100" : "";

  const handleCountryClick = () => {
    if (onCountryClick) {
      onCountryClick(country.id);
    }
  };

  return (
    <div
      className={`border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <img className="w-48" src={flag} alt={name} />

      <ul>
        <li>
          <ItemList label="Name">{name}</ItemList>
        </li>
        <li>
          <ItemList label="Capital">{capital}</ItemList>
        </li>
        <li>
          <ItemList label="Region">{region}</ItemList>
        </li>
        <li>
          <ItemList label="Population">{population}</ItemList>
        </li>
        <li>
          <ItemList label="Area">{area}</ItemList>
        </li>
      </ul>
    </div>
  );
};

export default Country;
