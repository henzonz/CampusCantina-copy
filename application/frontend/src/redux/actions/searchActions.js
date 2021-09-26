export const setSearchResults = (searchResults) => ({
  type: 'SEARCH_RESULT_SET',
  searchResults,
});

export const setNoResult = (noResult) => ({
  type: 'NO_RESULT_SET',
  noResult,
});

export const setSearchedTerm = (searchedTerm) => ({
  type: 'SEARCHED_TERM_SET',
  searchedTerm,
});

export const setSearchedCuisine = (searchedCuisine) => ({
  type: 'SEARCHED_CUISINE_SET',
  searchedCuisine,
});

export const setAllRestaurants = (allRestaurants) => ({
  type: 'ALL_RESTAURANTS_SET',
  allRestaurants,
});
