import React from "react";
import style from "../../Styles/donateForm.module.css";
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
