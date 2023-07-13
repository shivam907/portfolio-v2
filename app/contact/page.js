"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import classes from "./contact.module.css";
import MyCodeComponent from "@/components/Code";
import DisplayFile from "@/components/displayFile";
import File1 from "@/components/File1";
import File2 from "@/components/File2";
import File3 from "@/components/File3";
const page = () => {
  const [file, changeFile] = React.useState(File3);
  const [folder1, changeFolder1] = React.useState(true);
  const [folder2, changeFolder2] = React.useState(false);
  const [folder3, changeFolder3] = React.useState(false);
  const [fileActive, changeFileActive] = React.useState(1);
  const fileNames = ["bio.md", "interests.md", "education.md"];
  let arr = [];
  let listt = [
    "/**",
    "* About me",
    "* I have 5 years of еxperience in web",
    "* development lorem ipsum dolor sit amet,",
    "* consectetur adipiscing elit, sed do eiusmod",
    "* tempor incididunt ut labore et dolore",
    "* magna aliqua. Ut enim ad minim veniam,",
    "* quis nostrud exercitation ullamco laboris",
    "* nisi ut aliquip ex ea commodo consequat.",
    "* Duis aute irure dolor in reprehenderit in",
    "*",
    "* Duis aute irure dolor in reprehenderit in",
    "* voluptate velit esse cillum dolore eu fugiat",
    "* nulla pariatur. Excepteur sint occaecat",
    "* officia deserunt mollit anim id est laborum.",
    "*/",
  ];
  for (let i = 1; i <= listt.length; i++) {
    arr.push(<div className={classes.number}>{i}</div>);
  }
  let list = [];
  listt.forEach((i) => {
    list.push(<div className={classes.p}>{i}</div>);
  });

  React.useEffect(() => {
    changeFile(fileActive == 1 ? File1 : fileActive == 2 ? File2 : File3);
  }, [fileActive]);
  return (
    <>
      <div className={classes.leftBar}>
        <img className={classes.img1} src="/personal-info-icon.svg" alt="" />
        <img
          className={classes.img2}
          src="/professional-info-icon.svg"
          alt=""
        />
      </div>
      <div className={classes.info}>
        <div className={classes.contacts}>
          <div className={classes.heading}>
            <div className={classes.icon}>
              <img src="/icon.png" alt="" />
            </div>
            <div className={classes.name}>contacts</div>
          </div>
          <div className={classes.folders}>
            <div className={classes.folderHead}>
              <div className={classes.fileIcon}>
                <img src="/mail-icon.png" alt="" />
              </div>
              <div className={classes.fileName}>shivam@academer.co</div>
            </div>
            <div className={classes.folderHead}>
              <div className={classes.fileIcon}>
                <img src="/phone-icon.png" alt="" />
              </div>
              <div className={classes.fileName}>+91 8968969929</div>
            </div>
          </div>
        </div>
        <div className={classes.contacts}>
          <div className={classes.heading}>
            <div className={classes.icon}>
              <img src="/icon.png" alt="" />
            </div>
            <div className={classes.name}>find-me-also-in</div>
          </div>
          <div className={classes.folders}>
            <div className={classes.folderHead}>
              <div className={classes.fileIcon}>
                <img src="/redirect.png" alt="" />
              </div>
              <div className={classes.fileName}>Stackoverflow</div>
            </div>
            <div className={classes.folderHead}>
              <div className={classes.fileIcon}>
                <img src="/redirect.png" alt="" />
              </div>
              <div className={classes.fileName}>Leetcode</div>
            </div>
            <div className={classes.folderHead}>
              <div className={classes.fileIcon}>
                <img src="/redirect.png" alt="" />
              </div>
              <div className={classes.fileName}>Linkedin</div>
            </div>
            <div className={classes.folderHead}>
              <div className={classes.fileIcon}>
                <img src="/redirect.png" alt="" />
              </div>
              <div className={classes.fileName}>Instagram</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.upperBar}>
          <div className={classes.fileOpened}>
            <div className={classes.fileOpenedName}>
              {fileNames[fileActive - 1]}
            </div>
            <div className={classes.fileIcons}>
              <img src="/close-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className={classes.contactData}>
          <div className={classes.inp1}>
            <label htmlFor="">_name:</label>
            <input type="text" />
          </div>
          <div className={classes.inp1}>
            <label htmlFor="">_name:</label>
            <input type="email" />
          </div>
          <div className={classes.inp1}>
            <label htmlFor="">_name:</label>
            <textarea type="text" />
          </div>
          <div className={classes.view}>Submit</div>
        </div>
      </div>
      <div className={classes.code}>
        <div className={classes.displayFile}>
          <div className={classes.numbers}>{...arr}</div>
          <div class={classes.displayFileContent}>{...list}</div>
        </div>
      </div>
    </>
  );
};

export default page;
