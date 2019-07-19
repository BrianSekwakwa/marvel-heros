import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Marvel Heros</h1>
        <HeroForm />
        <HeroDescription />
        <HeroComics />
      </div>
    );
  }
}

export default App;
