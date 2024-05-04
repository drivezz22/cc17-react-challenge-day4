import FlagItem from "./FlagItem";

export default function FlagComponent(props) {
  const { countryData, searchText, handleInput, handleSearch, handleSelectedCountry } = props;
  return (
    <div className="flag-country-container">
      <div className="search-bar">
        <input
          value={searchText}
          onChange={handleInput}
          placeholder="Please fill a country name."
        />
        <button className="search-btn" onClick={handleSearch}>
          <span className="button-text">Search</span>
        </button>
      </div>
      <div className="flag-container">
        {countryData.length > 0 &&
          countryData.map((item, index) => (
            <FlagItem
              key={index}
              data={item}
              handleSelectedCountry={() => handleSelectedCountry(item.name.common)}
            />
          ))}
      </div>
    </div>
  );
}
