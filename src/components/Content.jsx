import React from "react";
import style from "./donateForm.module.css";
import Tabs from "./Tabs";

const Content = () => {
  return (
    <div className={style.divContainer}>
      <div className={style.divContent}>
        <Tabs />
      </div>
    </div>
  );
};

export default Content;
