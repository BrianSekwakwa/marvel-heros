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
      `http://gateway.marvel.com/v1/public/characters?name=thor&limit=1&ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
      .then(res => res.json())
      .then(heroData => {
        let heroId = heroData.data.results[0].id;

        //Fetching the Hero comics by its hero id
        fetch(
          `http://gateway.marvel.com/v1/public/characters/${heroId}/comics?limit=6&ts=${ts}&apikey=${publicKey}&hash=${hash}`
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

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

// https://gateway.marvel.com:443/v1/public/characters?name=thor&limit=1&apikey=776d8bd43b57caf9997ca8cc2c29ef7d

// https://gateway.marvel.com:443/v1/public/characters/1009664/comics?apikey=776d8bd43b57caf9997ca8cc2c29ef7d
