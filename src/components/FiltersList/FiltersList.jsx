import React, {useState} from "react";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({ setClassicFilter, setAbvFilter, setAcidityFilter }) => {

  // properties of checkbox id & status
  const [checkedCondition, setCheckedCondition] = useState({
    id: "",
    isChecked: false,
  });

  // object for filter function variable name targeting
  const filterFuncs = {
    classic: setClassicFilter,
    abv: setAbvFilter,
    acidity: setAcidityFilter,
  };

  // handle checkbox status (ON/OFF) & apply targeted filter "set" update method from props  
  const getCheckboxId = (e) => {
    if (checkedCondition.id.length > 0) {
      setCheckedCondition({ id: "", isChecked: e.target.checked });
      filterFuncs[e.target.id](e.target.checked);
    } else {
      setCheckedCondition({ id: e.target.id, isChecked: e.target.checked });
      filterFuncs[e.target.id](e.target.checked);
    }
  };
  
  // input element properties
  const filterData = [
    {name: "abv",
    description: "High Abv",
    checkboxFunc: getCheckboxId,
    type: "checkbox",
    id: "abv" 
  },
  {name: "classic",
  description: "Classic Range",
  checkboxFunc: getCheckboxId,
    type: "checkbox",
    id: "classic" 
   },
   {name: "acidity",
   description: "High acidity",
   checkboxFunc: getCheckboxId,
   type: "checkbox",
   id: "acidity" 
  },
]


const getFilters = 
  filterData.map((filterInfo, index) => {
    return (
      <FilterItem key={index} name={filterInfo.name} description={filterInfo.description} checkboxFunc={filterInfo.checkboxFunc} type={filterInfo.type} id={filterInfo.id}/>
    ) 
  });
 
  return (
    <>
      {getFilters}
    </>
  );

};

export default FiltersList;
