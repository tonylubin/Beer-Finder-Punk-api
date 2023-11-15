import React, { useState } from "react";
import FiltersList from "../FiltersList/FiltersList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./Options.module.scss";

const Options = ({
  setSearchItem,
  setAbvFilter,
  setClassicFilter,
  setFoodFilter
}) => {
  const [visibility, setVisibility] = useState(false);

  const revealBox = () => {
    setVisibility(!visibility);
  };

  return (
    <section className={styles.options}>
      <div
        className={`${styles.options__box} ${
          !visibility ? styles.options__hiddenBox : null
        }`}
      >
        <SearchBox setSearchItem={setSearchItem} />
        <div className={styles.options__filters}>
          <FiltersList
          setAbvFilter={setAbvFilter}
          setClassicFilter={setClassicFilter}
          setFoodFilter={setFoodFilter}
          />
        </div>
      </div>
      <div className={styles.btnHolder}>
        <button className={styles.btnHolder__btn} onClick={revealBox}>
          Filter / Search
        </button>
      </div>
    </section>
  );
};

export default Options;
