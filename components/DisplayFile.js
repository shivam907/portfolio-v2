import React from "react";
import classes from "./DisplayFile.module.css";
const DisplayFile = (props) => {
  let arr = [];
  for (let i = 1; i < props.list.length-2; i++) {
    arr.push(<div className={classes.number}>{i}</div>);
  }
  let list = [];
  props.list.forEach((i) => {
    list.push(<div className={classes.p}>{i}</div>);
  });
  return (
    <div className={classes.displayFile}>
      <div className={classes.numbers}>{...arr}</div>
      <div class={classes.displayFileContent}>{...list}</div>
    </div>
  );
};

export default DisplayFile;
