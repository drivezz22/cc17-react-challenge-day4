import Detail from "./Detail";
import FavoriteItem from "./FavoriteItem";
import MapComponent from "./MapComponent";

export default function DashBoardComponent(props) {
  const { selectedCountry, favoriteData, handleFavorite, deleteFavorite } = props;
  return (
    <>
      <div className="country-detail-container">
        {selectedCountry !== null && (
          <div className="country-detial">
            <div className="country-detail-left">
              <h1>Country Detail</h1>
              <Detail selectedCountry={selectedCountry} />
            </div>
            <div className="country-detail-right">
              <div className="map">
                {selectedCountry !== null && <MapComponent selectedCountry={selectedCountry} />}
              </div>
              <div className="add-favorite">
                <button onClick={() => handleFavorite(selectedCountry.name.common)}>
                  Add Favorite
                </button>
              </div>
            </div>
          </div>
        )}

        {favoriteData.length > 0 && (
          <>
            <div className="favorite-country">
              <h1>Favorite Place</h1>
              <div className="favorite-item-container">
                {favoriteData.map((item, index) => (
                  <FavoriteItem
                    key={index}
                    countryName={item}
                    deleteFavorite={() => deleteFavorite(item)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
