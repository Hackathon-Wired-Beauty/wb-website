import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestScreen } from "./screens/Test.screen";
import { AccueilScreen } from "./screens/Accueil.screen";
import AOS from "aos";
import "aos/dist/aos.css";
import { WhatWeDoScreen } from "./screens/WhatWeDo.screen";
AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AccueilScreen />} />
        <Route path={"/what-we-do"} element={<WhatWeDoScreen />} />
        <Route path={"/test"} element={<TestScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
