import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./utils/Lang";
import { TemplateScreen } from "./screens/Template.screen";
import {NavbarScreen} from "./screens/Navbar.screen";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavbarScreen/>
      <header className="App-header">

        <TemplateScreen />
      </header>

    </div>
  );
}

export default App;
