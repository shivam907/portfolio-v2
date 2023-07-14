'use client'
import React from "react";
import classes from "./DisplayFile.module.css";
const DisplayFile = (props) => {
  let arr = [];
  for (let i = 1; i < props.list.length + 1; i++) {
    arr.push(
      <div key={Math.random().toString()} className={classes.number}>
        {i}
      </div>
    );
  }
  console.log(props.list, " kk  ", props.list.length);
  let list = [];
  props.list.forEach((i) => {
    list.push(
      <div key={Math.random().toString()} className={classes.p}>
        {i}
      </div>
    );
  });
  return (
    <div className={classes.displayFile}>
      <div className={classes.numbers}>{...arr}</div>
      <div class={classes.displayFileContent}>{...list}</div>
    </div>
  );
};

export default DisplayFile;
