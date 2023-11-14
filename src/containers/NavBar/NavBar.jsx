import React from "react";
import FiltersList from "../../components/FiltersList/FiltersList";
import styles from "./NavBar.module.scss";

const NavBar = ({
  setAbvFilter,
  setClassicFilter,
  setFoodFilter,
}) => {
  
  return (
    <nav className={styles.nav}>
      <h3 className={styles.nav__header}>Filters:</h3>
      <FiltersList
        setAbvFilter={setAbvFilter}
        setClassicFilter={setClassicFilter}
        setFoodFilter={setFoodFilter}
      />
      <p className={styles.info}>Click on Beer card for more information</p>
    </nav>
  );
};

export default NavBar;
