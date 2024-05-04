import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import FlagComponent from "./components/FlagComponent";
import DashBoardComponent from "./components/DashBoardComponent";
import "../node_modules/leaflet/dist/leaflet.css";

function App() {
  const [data, setData] = useState({});
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [favoriteData, setFavoriteData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");

    const compareName = (a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      } else if (a.name.common == b.name.common) {
        return 0;
      } else if (a.name.common > b.name.common) {
        return 1;
      }
    };

    const sortData = response.data.sort(compareName);
    setData(sortData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filterCountry = data.filter((item) => {
      return (
        item.name.common.toLowerCase().includes(searchText.toLowerCase()) ||
        item.name.official.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilterData(filterCountry);
  };

  const handleSelectedCountry = (countryName) => {
    const selectedData = filterData.filter((item) => item.name.common === countryName);
    if (selectedData.length > 0) {
      setSelectedCountry(selectedData[0]);
    } else {
      setSelectedCountry(null);
    }
  };

  const handleFavorite = (countryName) => {
    const foundedIndex = favoriteData.findIndex((item) => item === countryName);
    if (foundedIndex === -1) {
      setFavoriteData([...favoriteData, countryName]);
    }
  };

  const deleteFavorite = (countryName) => {
    setFavoriteData(favoriteData.filter((item) => item !== countryName));
  };

  return (
    <div className="app">
      <FlagComponent
        countryData={filterData}
        searchText={searchText}
        handleInput={handleInput}
        handleSearch={handleSearch}
        handleSelectedCountry={handleSelectedCountry}
      />
      <DashBoardComponent
        selectedCountry={selectedCountry}
        favoriteData={favoriteData}
        handleFavorite={handleFavorite}
        deleteFavorite={deleteFavorite}
      />
    </div>
  );
}

export default App;
