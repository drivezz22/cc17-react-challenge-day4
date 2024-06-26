import { icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function MapComponent(props) {
  const { selectedCountry } = props;

  var markerIcon = icon({
    iconUrl: "./src/assets/location.svg",
    iconSize: [30, 30],
  });
  const MapMarker = () => {
    return (
      <Marker position={selectedCountry.latlng} icon={markerIcon}>
        <Popup>{selectedCountry.name.common}</Popup>
      </Marker>
    );
  };

  function ChangeLatLong() {
    const map = useMap();
    map.setView(selectedCountry.latlng, 5);
    return null;
  }

  return (
    <MapContainer
      className="map-view"
      center={selectedCountry.latlng}
      zoom={5}
      scrollWheelZoom={false}
    >
      <ChangeLatLong />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker />
    </MapContainer>
  );
}
