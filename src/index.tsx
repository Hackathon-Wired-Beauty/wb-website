import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Screens
import { AccueilScreen } from "./screens/Accueil.screen";
import { WhatWeDoScreen } from "./screens/WhatWeDo.screen";
import { WhoAreWeScreen } from "./screens/WhoAreWe";
import { RangeOfServiceScreen } from "./screens/RangeOfService.screen";
import { NomadicAndAppScreen } from "./screens/NomadicAndApp.screen";
import { ScientificValidScreen } from "./screens/ScientificValid.screen";
import { FooterScreen } from "./screens/Footer.screen";
import { LoginScreen } from "./screens/Login.screen";
import { AdminScreen } from "./screens/Admin.screen";
import { DashboardScreen } from "./screens/Dashboard.screen";
import { RenderScreen } from "./screens/Render.screen";

// Animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AccueilScreen />} />
        <Route path={"/what-we-do"} element={<WhatWeDoScreen />} />
        <Route path={"/who-are-we"} element={<WhoAreWeScreen />} />
        <Route path={"/range-of-service"} element={<RangeOfServiceScreen />} />
        <Route
          path={"/nomadic-labgrade-device-and-app"}
          element={<NomadicAndAppScreen />}
        />
        <Route
          path={"/scientific-validation"}
          element={<ScientificValidScreen />}
        />
        <Route path={"/footer"} element={<FooterScreen />} />
        <Route path={"/login"} element={<LoginScreen />} />
        <Route path={"/admin"} element={<AdminScreen />} />
        <Route path={"/dashboard"} element={<DashboardScreen />} />
        <Route path={"/render"} element={<RenderScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
