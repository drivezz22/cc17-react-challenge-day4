export default function FavoriteItem(props) {
  const { countryName, deleteFavorite } = props;
  return (
    <div className="favorite-item">
      <div className="favorite-name">{countryName}</div>
      <div onClick={deleteFavorite} className="close-icon">
        X
      </div>
    </div>
  );
}
