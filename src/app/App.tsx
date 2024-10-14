import {Suspense, useEffect} from "react";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/Router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();
    // useEffect(()=>{
    //     if(Math.random() < 0.4){
    //         throw new Error("ss")
    //     }
    // },[])
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={""}>
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
