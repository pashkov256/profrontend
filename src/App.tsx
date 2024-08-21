import React, { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { classNames } from "./helpers/classNames/classNames";
import AboutPage from "./pages/AboutPage/AboutPage";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.acync";
import MainPage from "./pages/MainPage/MainPage";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOOGLE THEME</button>
      <Link to={"/"}>to Main</Link>
      <Link to={"/about"}>О сайте</Link>{" "}
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
