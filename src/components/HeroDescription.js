import React from "react";
import { connect } from "react-redux";

function HeroDescription(props) {
  if (props.heroData) {
    
    return (
      <div className="hero-bio">
        <div className="hero-bio__image">
          The heros description will go here once we fetch the data from the api
        </div>
        <div className="hero-bio__content">
          <span className="hero-bio__content__title">Hero Title</span>
          <p className="hero-bio__content__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            voluptas rem tempora iusto laudantium enim aliquid reiciendis
            dignissimos laboriosam, debitis culpa iure est exercitationem
            fugiat, dolorem hic maiores, saepe autem.
          </p>
          <button className="hero-bio__content__button">Learn More</button>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    heroData: state.heroData
  };
};

export default connect(mapStateToProps)(HeroDescription);
