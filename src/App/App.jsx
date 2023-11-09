import React from "react";
import styles from "./App.module.scss";
import Main from "../containers/Main/Main";
import NavBar from "../containers/NavBar/NavBar";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import getBeerData from "../services/beerdata.service";
import Options from "../components/Options/Options";

function App() {
  const [beersFiltered, setBeersFiltered] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [abvFilter, setAbvFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);
  const [acidityFilter, setAcidityFilter] = useState(false);
  const [foodFilter, setFoodFilter] = useState(false);

  useEffect(() => {
    // N/B: getBeerData function returns a promise that we need to handle
    const fetchBeers = async () => {
      const beers = await getBeerData(
        searchItem,
        abvFilter,
        classicFilter,
        foodFilter,
        acidityFilter
      );
      setBeersFiltered(beers);
    };
    fetchBeers();
  }, [abvFilter, acidityFilter, foodFilter, classicFilter, searchItem]);

  return (
    <div className={styles.appContainer}>
      <Header setSearchItem={setSearchItem} />
      <NavBar
        setAbvFilter={setAbvFilter}
        setAcidityFilter={setAcidityFilter}
        setClassicFilter={setClassicFilter}
        setFoodFilter={setFoodFilter}
      />
      <Options
        setSearchItem={setSearchItem}
        setAbvFilter={setAbvFilter}
        setAcidityFilter={setAcidityFilter}
        setClassicFilter={setClassicFilter}
        setFoodFilter={setFoodFilter}
      />
      {beersFiltered && <Main beersSearched={beersFiltered} />}
    </div>
  );
}

export default App;
