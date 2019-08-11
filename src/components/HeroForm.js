import React, { Component } from "react";
import { connect } from "react-redux";
import { searchHero } from "../store/actions/searchHeroAction";

class HeroForm extends Component {
  state = {
    heroName: null
  };

  handleChange = e => {
    this.setState({
      heroName: e.target.value
    });
  };

  handleClick = e => {
    e.target.value = null;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchHero(this.state.heroName);
  };
  render() {
    return (
      <div className="hero-search">
        <p className="hero-search__title"> MARVEL HEROS</p>
        <form className="hero-search__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter hero name: Eg. thor"
            onChange={this.handleChange}
            onClick={this.handleClick}
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchHero: heroName => {
      dispatch(searchHero(heroName));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HeroForm);
