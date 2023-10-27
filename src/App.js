import React, { Component } from "react";
import MyCars from "./Components/Mycars";

import "bootstrap/dist/css/bootstrap.min.css"; // importer bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js"; // importer son JS

import Navbar from "./Components/Navbar"; // importer la Navbar

class App extends Component {
  // State (état, donnnés, data)
  state = {
    titre: "Mon catalogue de voitures",
  };

  // Comportements

  // Affichage (render)
  render() {
    return (
      <div className="App">
        <Navbar />
        <MyCars title={this.state.titre} />
      </div>
    );
  }
}

export default App;
