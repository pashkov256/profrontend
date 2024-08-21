import { lazy } from "react";
export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 700);
    })
); //компонент по дефолнту экспортироваться должен | называется code spliting или lazy loading
