import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

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
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
