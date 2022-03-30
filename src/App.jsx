import React from "react";
import styles from "./App.module.scss";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import getBeerData from "./services/beerdata.service";

function App() {

  const [beersFiltered, setBeersFiltered] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [abvFilter, setAbvFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);
  const [acidityFilter, setAcidityFilter] = useState(false);

  useEffect(() => {
    // N/B: getBeerData function returns a promise that we need to handle
    const fetchBeers = async () => {
      const beers = await getBeerData(
        searchItem,
        abvFilter,
        classicFilter,
        acidityFilter
        );
        setBeersFiltered(beers);
    };    
    fetchBeers();
  },[abvFilter, acidityFilter, classicFilter, searchItem]);

  return (
    <div className={styles.appContainer}>
      <Header />
      <NavBar
        setSearchItem={setSearchItem}
        setBeersFiltered={setBeersFiltered}
        setAbvFilter={setAbvFilter}
        setAcidityFilter={setAcidityFilter}
        setClassicFilter={setClassicFilter}
      />
      {beersFiltered && <Main beersSearched={beersFiltered} />}
    </div>
  );
}

export default App;
