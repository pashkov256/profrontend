import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "shared/ui/Button/Button";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/Router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
