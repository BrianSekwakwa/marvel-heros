// initial state to pass into the reducer
const initState = {
  heroData: null,
  heroComics: null
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "HERO_LOADED":
      // Setting the data from the search hero action to the application state
      return {
        ...state,
        heroData: action.hero.heroData,
        heroComics: action.hero.heroComics
      };
    case "ERROR":
      alert("Could not fetch data \n", action.err);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
