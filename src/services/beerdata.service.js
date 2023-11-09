const BASE_API_URL = "https://api.punkapi.com/v2/beers?per_page=80";

const getBeerData = async (
  searchTerm,
  hasAbvFilter,
  hasClassicFilter,
  hasFoodFilter
) => {
  let searchCriteria = searchTerm
    ? `&beer_name=${searchTerm}`
    : `&${searchTerm}`;

  let searchTermUrl = [];
  if (hasAbvFilter) searchTermUrl.push("&abv_lt=4.1");
  if (hasClassicFilter) searchTermUrl.push("&brewed_before=01-2010");

  let urlRequest = searchTermUrl.length
    ? `${BASE_API_URL}${searchCriteria}&${searchTermUrl.join("")}`
    : `${BASE_API_URL}${searchCriteria}`;

  const response = await fetch(urlRequest);

  const data = await response.json();

  // filter for food pairing
  const foodTermLib = {
    meat: ["chicken", "pork", "beef", "veal", "bacon", "lamb", "ham", "steak"],
    seafood: ["fish", "cod", "tuna", "prawns", "lobster", "crab", "mussels"],
    spicy: ["spicy", "chillies", "hot", "fiery"],
    sweet: ["sweet", "dessert", "pudding", "tart", "custard"],
  };

  const filterFoodTerm = (arr) => {
    const filteredBeersData = data.filter((beer) => {
      // string array of each meal
      const foodPairings = beer.food_pairing.map((food) => food.toLowerCase().split(" "));
      // check if words included in meal
      const foodSearch = foodPairings.map((meal) => {
       return arr.some((ingredient) => meal.includes(ingredient))
      });
      // returns if result is true
      const check = foodSearch.some(el => el === true);
      return check;
    });
    return filteredBeersData;
  };

  switch (hasFoodFilter) {
    case "meat":
      return filterFoodTerm(foodTermLib.meat);
    case "seafood":
      return filterFoodTerm(foodTermLib.seafood);
    case "spicy":
      return filterFoodTerm(foodTermLib.spicy);
    case "sweet":
      return filterFoodTerm(foodTermLib.sweet);
    default:
      return data;
  }
};

export default getBeerData;
