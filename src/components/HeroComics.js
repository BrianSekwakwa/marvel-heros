import React from "react";
import { connect } from "react-redux";

function HeroComics(props) {
  // Checking to see if the heroComics data exists in the store state
  if (props.heroComics) {
    const { name } = props.heroData;
    return (
      <div className="hero-comics">
        <span className="hero-comics__title">{name} Comics</span>
        <div className="hero-comics__comics">
          {/* Looping through the comics data */}
          {props.heroComics.map(comic => {
            const { id, thumbnail, urls, title } = comic;
            return (
              <div key={id} className="hero-comics__comics__item">
                <p>{title}</p>
                <a href={urls[0].url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt="comic thumbnail"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    heroComics: state.heroComics,
    heroData: state.heroData
  };
};

export default connect(mapStateToProps)(HeroComics);
