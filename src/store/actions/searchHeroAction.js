export const searchHero = heroName => {
  return (dispatch, getState) => {
    dispatch({
      type: "LOADED",
      heroName: heroName
    });
  };
};
