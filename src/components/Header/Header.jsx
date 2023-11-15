import React from "react";
import styles from "./Header.module.scss";
import image from "../../BrewDog-logo.jpg";
import SearchBox from "../SearchBox/SearchBox";

const Header = ({ setSearchItem }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__imgContainer}>
        <img src={image} alt="Brewdog Logo" />
      </div>
      <div className={styles.header__heading}>
        <h1>Beer Finder</h1>
        <p>"searching for a BrewDog beer that quenches that cold beer thirst..."</p>
      </div>
      <div className={styles.header__searchbox}>
        <SearchBox setSearchItem={setSearchItem}/>
      </div>
    </header>
  );
};

export default Header;
