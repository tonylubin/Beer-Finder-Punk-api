import React from "react";
import FiltersList from "../../components/FiltersList/FiltersList";
import styles from "./NavBar.module.scss";

const NavBar = ({
  setBeersFiltered,
  setAbvFilter,
  setClassicFilter,
  setAcidityFilter,
  allBeers,
}) => {
  
  return (
    <nav className={styles.nav}>
      <h3 className={styles.nav__header}>Filters:</h3>
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
