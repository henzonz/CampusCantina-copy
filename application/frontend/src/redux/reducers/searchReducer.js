const initState = () => ({
  searchResults: [],
  noResult: '',
  searchedTerm: '',
  searchedCuisine: 'All Cuisines',
  allRestaurants: [],
});

const searchReducer = (state = initState(), action) => {
  // console.log(action);
  switch (action.type) {
    case 'SEARCH_RESULT_SET':
      return {
        ...state, // Copy old state
        searchResults: action.searchResults, // Input new user name
      };
    case 'NO_RESULT_SET':
      return {
        ...state,
        noResult: action.noResult,
      };
    case 'SEARCHED_TERM_SET':
      return {
        ...state,
        searchedTerm: action.searchedTerm,
      };
    case 'SEARCHED_CUISINE_SET':
      return {
        ...state,
        searchedCuisine: action.searchedCuisine,
      };
    case 'ALL_RESTAURANTS_SET':
      return {
        ...state,
        allRestaurants: action.allRestaurants,
      };
    default:
      // Don't modify state, ignore action
      return state;
  }
};

export default searchReducer;
