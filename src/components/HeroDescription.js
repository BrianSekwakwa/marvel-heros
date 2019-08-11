import React from "react";
import { connect } from "react-redux";

function HeroDescription(props) {
  // Checking to see if the props are not empty
  if (props.heroData) {
    // destructuring and getting relevant data from the props
    const { comics, name, thumbnail, urls } = props.heroData;
    let { description } = props.heroData;

    // checking to see if the description from the api is empty to output a different message

    if (description === "") {
      description = "Character does not have a description";
    }

    return (
      <div className="hero-bio">
        <div className="hero-bio__image">
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="hero thumbnail"
          />
        </div>
        <div className="hero-bio__content">
          <span className="hero-bio__content__title">{name}</span>
          <p className="hero-bio__content__description">{description}</p>
          <p className="hero-bio__content__collection">
            <span>
              Comics: <span>{comics.available}</span>
            </span>
          </p>
          <a href={urls[0].url} target="_blank" rel="noopener noreferrer">
            <button className="hero-bio__content__button">Learn More</button>
          </a>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

// Mapping the state from the store to the props
const mapStateToProps = state => {
  return {
    heroData: state.heroData
  };
};

export default connect(mapStateToProps)(HeroDescription);
