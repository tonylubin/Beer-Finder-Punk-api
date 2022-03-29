import React from "react";
import FiltersList from "../../components/FiltersList/FiltersList";
import SearchBox from "../../components/SearchBox/SearchBox";
import styles from "./NavBar.module.scss";

const NavBar = ({
  setSearchItem,
  setBeersFiltered,
  setAbvFilter,
  setClassicFilter,
  setAcidityFilter,
  allBeers,
}) => {
  
  return (
    <nav className={styles.nav}>
      <SearchBox setSearchItem={setSearchItem} />
      <FiltersList
        setBeersFiltered={setBeersFiltered}
        setAbvFilter={setAbvFilter}
        setAcidityFilter={setAcidityFilter}
        setClassicFilter={setClassicFilter}
        allBeers={allBeers}
      />
      <p className={styles.info}>Hover over Beer for more information</p>
    </nav>
  );
};

export default NavBar;
