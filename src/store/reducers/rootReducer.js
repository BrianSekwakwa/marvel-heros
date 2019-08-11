// initial state to pass into the reducer
const initState = {
  heroData: null,
  heroComics: null,
  isLoading: false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "HERO_LOADED":
      // Setting the data from the search hero action to the application state
      return {
        ...state,
        heroData: action.hero.heroData,
        heroComics: action.hero.heroComics,
        isLoading: action.hero.isLoading
      };
    case "HERO_LOADING":
      // Setting the data of the searched hero to null and setting the loading property to be true
      return {
        ...state,
        heroData: null,
        heroComics: null,
        isLoading: action.isLoading
      };

    case "HERO_ERROR_LOADING":
      // Stopping the loading component if there was an error searching for the hero or the comics
      return {
        isLoading: action.isLoading
      };
    case "ERROR":
      alert("Could not fetch data \n", action.err);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
