'use client'
import React from "react";
import DisplayFile from "./DisplayFile";
const File1 = () => {
  return (
    <DisplayFile
      list={[
        "/**",
        "* About me",
        "* I am Shivam Kaushal",
        "* I belong to Hoshiarpur, Punjab,",
        "* I am currently in Bengaluru,",
        "* I am a captivating individual,",
        "* Driven by a desire to make a positive impact",
        "* I possess a vibrant thirst for knowledge,",
        "* I consistently deliver exceptional results.",
        "* I am very consistent and Hardworking Person",
        "* I am a natural problem-solver",
        "* finding creative solutions to challenges.",
        "* I am open-minded and embrace diversity,",
        "* With a blend of passion and determination,",
        "* I make a difference wherever I go.",
        "*/",
      ]}
      len={1}
    />
  );
};

export default File1;
