import React, { useContext } from "react";
import styles from "./Header.module.scss";
import lightLogo from "../../assests/brewdog-logo.png";
import darkLogo from "../../assests/brewdog-logo-black.png";
import SearchBox from "../SearchBox/SearchBox";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { ThemeContext } from "../../containers/ThemeContext";


const Header = ({ setSearchItem }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__imgContainer}>
        <img src={theme === 'light' ? darkLogo : lightLogo} alt="Brewdog Logo" />
      </div>
      <div className={styles.header__heading}>
        <h1>Beer Finder</h1>
        <p>"searching for a BrewDog beer that quenches that cold beer thirst..."</p>
      </div>
      <div className={styles.header__searchbox}>
        <ToggleSwitch />
        <SearchBox setSearchItem={setSearchItem}/>
      </div>
    </header>
  );
};

export default Header;
