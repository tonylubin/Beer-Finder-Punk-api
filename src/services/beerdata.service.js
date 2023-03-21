const BASE_API_URL = "https://api.punkapi.com/v2/beers?per_page=80";

const getBeerData = async (
  searchTerm,
  hasAbvFilter,
  hasClassicFilter,
  hasAcidityFilter
) => {

  let searchCriteria = searchTerm
    ? `&beer_name=${searchTerm}`
    : `&${searchTerm}`;

  let searchTermUrl = [];
  if (hasAbvFilter) searchTermUrl.push("&abv_gt=6");
  if (hasClassicFilter) searchTermUrl.push("&brewed_before=01-2010");

  let urlRequest = searchTermUrl.length
    ? `${BASE_API_URL}${searchCriteria}&${searchTermUrl.join("")}`
    : `${BASE_API_URL}${searchCriteria}`;

  const response = await fetch(urlRequest);
  const data = await response.json();
  if (hasAcidityFilter) {
    let beers = data.filter((beer) => beer.ph < 4);
    return beers;
  } else {
    return data;
  }
};

export default getBeerData;
