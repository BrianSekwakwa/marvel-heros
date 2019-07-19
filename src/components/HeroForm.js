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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter the marvel hero's name"
            onChange={this.handleChange}
          />
          <button type="submit">Search Hero</button>
        </form>
      </div>
    );
  }
}

export default HeroForm;
