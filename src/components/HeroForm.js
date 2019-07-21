import React, { Component } from "react";

class HeroForm extends Component {
  state = {
    heroName: null,
    heroResults: null
  };

  handleChange = e => {
    console.log(e.target.value);
  };

  handleSubmit = e => {
    console.log(this.state.heroResults);
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form className="hero-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="ENTER HERO'S NAME"
            onChange={this.handleChange}
          />
          <button type="submit">SEARCH HERO</button>
        </form>
      </div>
    );
  }
}

export default HeroForm;
