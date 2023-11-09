import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import styles from "./FiltersList.module.scss";

const FiltersList = ({ setClassicFilter, setAbvFilter, setAcidityFilter, setFoodFilter }) => {

  // object for filter function variable name targeting
  const filterFuncs = {
    classic: setClassicFilter,
    abv: setAbvFilter,
    acidity: setAcidityFilter,
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
    },
    {
      name: "classic",
      description: "Classic Range",
      checkboxFunc: getCheckboxId,
      type: "checkbox",
      id: "classic",
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
      <FilterItem
        key={index}
        name={filterInfo.name}
        description={filterInfo.description}
        checkboxFunc={filterInfo.checkboxFunc}
        type={filterInfo.type}
        id={filterInfo.id}
      />
    );
  });

  return (
    <>
      {getFilters}
      <div className={styles.dropdown}>
        <label htmlFor="foods">Drinks well with:</label>
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
