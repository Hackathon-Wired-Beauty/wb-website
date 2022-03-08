import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./utils/Lang";
import { TemplateScreen } from "./screens/Template.screen";
import i18n from "./utils/Lang";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemplateScreen />
      </header>
    </div>
  );
}

export default App;
