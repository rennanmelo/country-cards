const Country = ({ children: country }) => {
  const { flag, name, capital, region, population, area } = country;

  return (
    <div className="border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer">
      <img className="w-48" src={flag} alt={name} />

      <ul>
        <li>
          <span className="text-sm">
            <strong>Name:</strong> {name}
          </span>
        </li>
        <li>
          <span className="text-sm">
            <strong>Capital:</strong> {capital}
          </span>
        </li>
        <li>
          <span className="text-sm">
            <strong>Region:</strong> {region}
          </span>
        </li>
        <li>
          <span className="text-sm">
            <strong>Population:</strong> {population}
          </span>
        </li>
        <li>
          <span className="text-sm">
            <strong>Area:</strong> {area}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Country;
