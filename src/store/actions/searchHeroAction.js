let md5 = require("md5");

// Keys from the marvel API for authentication
const authAPIKeys = {
  publicKey: "776d8bd43b57caf9997ca8cc2c29ef7d",
  privateKey: "35aa7e075a342cb5b5728ddb6223073ab0c52d8a"
};

export const searchHero = heroName => {
  // Authentication
  const { publicKey, privateKey } = authAPIKeys;
  let ts = Date.now().toString();
  let hash = md5(ts + privateKey + publicKey);

  return (dispatch, getState) => {
    // Fetching the hero data by name
    fetch(
      `http://gateway.marvel.com/v1/public/characters?name=${heroName}&limit=1&ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then(res => res.json())
      .then(heroData => {
        let heroId = heroData.data.results[0].id;

        //Fetching the Hero comics by its hero id
        fetch(
          `http://gateway.marvel.com/v1/public/characters/${heroId}/comics?limit=9&ts=${ts}&apikey=${publicKey}&hash=${hash}`
        )
          .then(res => res.json())
          .then(heroComics => {
            // Passing the data from the API to the Reducer
            dispatch({
              type: "HERO_LOADED",
              hero: {
                heroData: heroData.data.results[0],
                heroComics: heroComics.data.results
              }
            });
          })
          .catch(err => {
            dispatch({ type: "ERROR", err: err });
          });
      })
      .catch(err => {
        dispatch({ type: "ERROR", err: err });
      });
  };
};
