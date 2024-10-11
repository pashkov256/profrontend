import { lazy } from "react";
export const AboutPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import("./AboutPage")), 700);
        })
); //компонент по дефолнту экспортироваться должен  | называется code spliting или lazy loading
