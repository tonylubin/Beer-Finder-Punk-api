import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import styles from "./FiltersList.module.scss";
import BeerIcon from "../Icons/BeerIcon";
import ClassicIcon from "../Icons/ClassicIcon";
import MealIcon from "../Icons/MealIcon";

const FiltersList = ({ setClassicFilter, setAbvFilter, setFoodFilter }) => {

  // object for filter function variable name targeting
  const filterFuncs = {
    classic: setClassicFilter,
    abv: setAbvFilter
  };

  // handle checkbox status (ON/OFF) & apply targeted filter "set" update method from props
  const getCheckboxId = (e) => {
    if (e.target.id.length > 0) {
      filterFuncs[e.target.id](e.target.checked);
    } else {
      // e.g from filterFuncs - setAbvFilter(true)
      filterFuncs[e.target.id](e.target.checked);
    }
  };

  // input element properties
  const filterData = [
    {
      name: "abv",
      description: "Low Abv (< 4%)",
      checkboxFunc: getCheckboxId,
      type: "checkbox",
      id: "abv",
      icon: <BeerIcon classname={`${styles.filterHolder__icon} ${styles.beer}`} />
    },
    {
      name: "classic",
      description: "Classic Range",
      checkboxFunc: getCheckboxId,
      type: "checkbox",
      id: "classic",
      icon: <ClassicIcon classname={styles.filterHolder__icon} />
    }
  ];

  // handle dropdown menu selection
  const handleDropdownStatus = (e) => {
    if (e.target.value) {
      setFoodFilter(e.target.value);
    }
    else {
      setFoodFilter(e.target.value);
    }
  };

  const getFilters = filterData.map((filterInfo, index) => {
    return (
      <div className={styles.filterHolder} key={index}>
        {filterInfo.icon}
        <FilterItem
          name={filterInfo.name}
          description={filterInfo.description}
          checkboxFunc={filterInfo.checkboxFunc}
          type={filterInfo.type}
          id={filterInfo.id}
        />
      </div>
    );
  });

  return (
    <>
      {getFilters}
      <div className={styles.dropdown}>
        <div className={styles.filterHolder}>
          <MealIcon classname={styles.filterHolder__icon}/>
          <label htmlFor="foods">Drinks well with:</label>
        </div>
        <select name="foods" id="foods" onChange={handleDropdownStatus}>
          <option value={""}>Select food pairing--</option>
          <option value={"meat"}>Meat</option>
          <option value={"seafood"}>Seafood</option>
          <option value={"spicy"}>Spicy</option>
          <option value={"sweet"}>Sweet/Dessert</option>
        </select>
      </div>
    </>
  );
};

export default FiltersList;
