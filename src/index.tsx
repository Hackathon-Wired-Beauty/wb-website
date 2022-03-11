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
import { NomadicAndAppScreen } from "./screens/NomadicAndApp.screen";
import { WhoAreWeScreen } from "./screens/WhoAreWe";
import { LoginScreen } from "./screens/Login.screen";
import { AdminScreen } from "./screens/Admin.screen";
import { RenderScreen } from "./screens/Render.screen";
AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AccueilScreen />} />
        <Route path={"/what-we-do"} element={<WhatWeDoScreen />} />
        <Route path={"/who-are-we"} element={<WhoAreWeScreen />} />
        <Route
          path={"/nomadic-labgrade-device-and-app"}
          element={<NomadicAndAppScreen />}
        />
        <Route path={"/login"} element={<LoginScreen />} />
        <Route path={"/admin"} element={<AdminScreen />} />
        <Route path={"/render"} element={<RenderScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
