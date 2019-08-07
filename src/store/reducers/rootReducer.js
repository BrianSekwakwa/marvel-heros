const initState = {
  firstName: "Brian",
  lastName: "Sekwakwa",
  age: 24,
  isMale: true
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADED":
      console.log("The content was loaded", action.heroName);
      return state;
    case "NOT_LOADED":
      console.log("The content was NOT loaded");
      return state;
    default:
      return state;
  }
};

export default rootReducer;
