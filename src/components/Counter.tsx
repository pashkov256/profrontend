import React, { useState } from "react";
import styles from "./cs.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(styles);

  return (
    <div>
      <h1>{count}</h1>
      <button
        className={styles.dar}
        onClick={() => setCount((prev) => prev + 1)}
      ></button>
    </div>
  );
};
