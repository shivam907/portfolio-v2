'use client'
import React from "react";
import classes from "./DisplayFile.module.css";
const emptyFile = () => {

  return (
    <div className={classes.displayFile}>
      {/* <div className={classes.numbers}></div> */}
      <div class={classes.empty}>
      No file Opened, Open a File</div>
    </div>
  );
};

export default emptyFile;

