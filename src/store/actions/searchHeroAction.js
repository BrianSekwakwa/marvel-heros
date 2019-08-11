let md5 = require("md5");

// Keys from the marvel API for authentication
const authAPIKeys = {
  publicKey: "776d8bd43b57caf9997ca8cc2c29ef7d",
  privateKey: "35aa7e075a342cb5b5728ddb6223073ab0c52d8a"
};

export const searchHero = heroName => {
  // Formatting the hero name string
  if (heroName.includes("spider")) {
    // Putting a hyphen in white spaces for spider class heros
    heroName = heroName.trim().replace(/[^A-Z0-9]+/gi, "-");
  } else {
    // Putting a %20 in white spaces for other heros
    heroName = heroName.trim().replace(/[^A-Z0-9]+/gi, "%20");
  }

  // Authentication
  const { publicKey, privateKey } = authAPIKeys;
  let ts = Date.now().toString();
  let hash = md5(ts + privateKey + publicKey);

  return (dispatch, getState) => {
    // Dispatching action to show the hero description and comics loading
    dispatch({
      type: "HERO_LOADING",
      isLoading: true
    });

    setTimeout(() => {
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
                  heroComics: heroComics.data.results,
                  isLoading: false
                }
              });
            })
            .catch(err => {
              // passing an error if failed to fetch hero comics
              dispatch({ type: "ERROR", err: err });
              dispatch({ type: "HERO_ERROR_LOADING", isLoading: false });
            });
        })
        .catch(err => {
          // passing an error if failed to fetch hero by name
          dispatch({ type: "ERROR", err: err });
          dispatch({ type: "HERO_ERROR_LOADING", isLoading: false });
        });
    }, 1000);
  };
};
