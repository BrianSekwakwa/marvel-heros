import React, { Component } from "react";
import HeroForm from "./components/HeroForm";
import HeroDescription from "./components/HeroDescription";
import HeroComics from "./components/HeroComics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero-header">
          <h1 className="hero-header__title">MARVEL HEROS</h1>
          <p className="hero-header__lead">
            Search For Your Favorite Marvel Super Hero
          </p>
        </div>
        <HeroForm />
        {/* <HeroDescription />
        <HeroComics /> */}
      </div>
    );
  }
}

export default App;
