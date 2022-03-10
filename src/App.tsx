import "./App.css";
import "./utils/Lang";
import {NavbarScreen} from "./screens/Navbar.screen";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavbarScreen/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
