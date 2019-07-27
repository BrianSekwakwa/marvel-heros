import React, { Component } from "react";
import Header from "./components/Header.js";
import HeroForm from "./components/HeroForm";
import HeroDescription from "./components/HeroDescription";
import HeroComics from "./components/HeroComics";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeroForm />
        {/* <HeroDescription />
        <HeroComics /> */}
      </div>
    );
  }
}

export default App;
