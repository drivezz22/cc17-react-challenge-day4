export default function Detail(props) {
  const { selectedCountry } = props;

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="detail">
      <p>
        Capital :{" "}
        <span>
          {selectedCountry.capital !== undefined ? selectedCountry.capital.join(",") : "No Data"}
        </span>
      </p>
      <p>
        Population :{" "}
        <span>
          {selectedCountry.population !== undefined
            ? formatNumber(selectedCountry.population)
            : "No Data"}
        </span>
      </p>
      <p>
        Area :{" "}
        <span>
          {selectedCountry.area !== undefined ? formatNumber(selectedCountry.area) : "No Data"}
        </span>
      </p>
      <p>
        Region :{" "}
        <span>{selectedCountry.region !== undefined ? selectedCountry.region : "No Data"}</span>
      </p>
      <p>
        Sub-Region :{" "}
        <span>
          {selectedCountry.subregion !== undefined ? selectedCountry.subregion : "No Data"}
        </span>
      </p>

      <p>
        Latitude - Longtitude :{" "}
        <span>
          {selectedCountry.latlng !== undefined ? selectedCountry.latlng.join(", ") : "No Data"}
        </span>
      </p>
    </div>
  );
}
