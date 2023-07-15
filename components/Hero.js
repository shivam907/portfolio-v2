"use client";

import React from "react";
import classes from "./Hero.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import image from "../public/terminal.png";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className={classes.hero}>
      <div className={classes.leftHero}>
        <div className={classes.upper}>
          <h2 className={classes.intro}>Hi all. I am</h2>
          <h1 className={classes.name}>Shivam kaushal</h1>
          <div className={classes.role}>
            <div className={classes.fixedSymbol}>&#62;</div>
            <div className={classes.typing}>
              <div className={classes.typingText}>{text}</div>
              <div className={classes.cursor}>
                <Cursor cursorStyle="|" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.lower}>
          <div className={classes.comment}>
            // checkout my projects section to see my work
          </div>
          <div className={classes.comment}>
            // you can also see it on my github page
          </div>
          <div className={classes.gitlink}>
            <div className={classes.const}>const</div>
            <div className={classes.variable}>githubLink</div>
            <div className={classes.equal}>=</div>
            <div className={classes.link}>https://github.com/shivam907</div>;
          </div>
        </div>
      </div>
      <div className={classes.rightHero}>
        <img className={classes.terminal} src="/terminal.webp" alt="" />
        <img className={classes.blur} src="/Background Blurs.webp" alt="" />
      </div>
    </div>
  );
};

export default Hero;
