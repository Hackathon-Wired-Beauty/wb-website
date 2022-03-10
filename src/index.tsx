import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestScreen } from "./screens/Test.screen";
import { AccueilScreen } from "./screens/Accueil.screen";
import {ScientificValidScreen} from "./screens/ScientificValid.screen";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AccueilScreen />} />
        <Route path={"/test"} element={<TestScreen />} />
          <Route path={"/scientific-validation"} element={<ScientificValidScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
