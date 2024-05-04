export default function FlagItem(props) {
  const { data, handleSelectedCountry } = props;
  return (
    <div className="flag-item" onClick={handleSelectedCountry}>
      <img src={data.flags.svg} />
      <div className="country-name">{data.name.common}</div>
    </div>
  );
}
