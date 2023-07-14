"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import classes from "./project.module.css";
import MyCodeComponent from "@/components/Code";
import Link from "next/link";
import DisplayFile from "@/components/displayFile";
import File1 from "@/components/File1";
import File2 from "@/components/File2";
import File3 from "@/components/File3";
const page = () => {
  const [file, changeFile] = React.useState(File3);
  const [folder1, changeFolder1] = React.useState(true);
  const [folder2, changeFolder2] = React.useState(false);
  const [folder3, changeFolder3] = React.useState(false);

  const [workspace, changeWorkspace] = React.useState(true);

  const [fileActive, changeFileActive] = React.useState(1);
  const fileNames = ["bio.md", "interests.md", "education.md"];
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
        <div className={classes.personalInfo}>
          <div
            className={classes.heading}
            onClick={() => {
              changeWorkspace(workspace ? false : true);
            }}
          >
            <div className={classes.icon}>
              <img
                className={workspace ? "" : classes.rotated}
                src="/icon.png"
                alt=""
              />
            </div>
            <div className={classes.name}>my-projects</div>
          </div>
          {workspace && (
            <div className={classes.select}>
              <div className={classes.option}>
                <label className={classes.check}>
                  <input
                    type="checkbox"
                    className={classes.checkbox}
                    // checked="checked"
                  />
                </label>

                <div className={classes.selectOption}>
                  <img src="/html.png" alt="" />
                </div>
                <div className={classes.optionName}>HTML</div>
              </div>
              <div className={classes.option}>
                <label className={classes.check}>
                  <input
                    type="checkbox"
                    className={classes.checkbox}
                    // checked="checked"
                  />
                </label>

                <div className={classes.selectOption}>
                  <img src="/css.png" alt="" />
                </div>
                <div className={classes.optionName}>CSS</div>
              </div>
              <div className={classes.option}>
                <label className={classes.check}>
                  <input
                    type="checkbox"
                    className={classes.checkbox}
                    // checked="checked"
                  />
                </label>

                <div className={classes.selectOption}>
                  <img src="/react.png" alt="" />
                </div>
                <div className={classes.optionName}>React Js</div>
              </div>
              <div className={classes.option}>
                <label className={classes.check}>
                  <input
                    type="checkbox"
                    className={classes.checkbox}
                    // checked="checked"
                  />
                </label>

                <div className={classes.selectOption}>
                  <img className={classes.node} src="/node.png" alt="" />
                </div>
                <div className={classes.optionName}>Node Js</div>
              </div>
              <div className={classes.option}>
                <label className={classes.check}>
                  <input
                    type="checkbox"
                    className={classes.checkbox}
                    // checked="checked"
                  />
                </label>

                <div className={classes.selectOption}>
                  <img src="/js.png" alt="" />
                </div>
                <div className={classes.optionName}>JavaScript</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={classes.code}>
        <div className={classes.upperBar}>
          <div className={classes.fileOpened}>
            <div className={classes.fileOpenedName}>Projects.md</div>
            <div className={classes.fileIcons}>
              <img src="/close-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className={classes.displayFile}>
          <div className={classes.project}>
            <div className={classes.projNames}>
              <div className={classes.projName}>Project 1</div>
              <div className={classes.projectName}>// _audiohile-ecommerce</div>
            </div>
            <div className={classes.projectBox}>
              <img src="/proj1.png" alt="" />
              <div className={classes.projContent}>
                <p>Duis aute irure dolor in velit esse cillum dolore.</p>{" "}
                <div className={classes.btns}>
                  <Link href="https://lovely-gumption-003323.netlify.app/">
                    <div className={classes.view}>Live Demo</div>
                  </Link>
                  <Link
                    className={classes.imm}
                    href="https://github.com/shivam907/audiophile"
                  >
                    {/* <div className={classes.imm}> */}
                    <img src="/icons8-github.svg" alt="" />
                    <div className={classes.cir}></div>
                    {/* </div> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.project}>
            <div className={classes.projNames}>
              <div className={classes.projName}>Project 2</div>
              <div className={classes.projectName}>// _metaverse</div>
            </div>
            <div className={classes.projectBox}>
              <img src="/proj2.png" alt="" />
              <div className={classes.projContent}>
                <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                <div className={classes.btns}>
                  <Link href="https://metaverse-henna.vercel.app/">
                    <div className={classes.view}>Live Demo</div>
                  </Link>
                  {/* <div className={classes.imm}> */}
                  <Link
                    className={classes.imm}
                    href="https://github.com/shivam907/metaverse"
                  >
                    <img src="/icons8-github.svg" alt="" />
                    <div className={classes.cir}></div>
                    {/* </div> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.project}>
            <div className={classes.projNames}>
              <div className={classes.projName}>Project 3</div>
              <div className={classes.projectName}>// _snippet-saver</div>
            </div>
            <div className={classes.projectBox}>
              <img src="/proj3.png" alt="" />
              <div className={classes.projContent}>
                <p>Duis aute irure dolor in velit esse cillum dolore.</p>{" "}
                <div className={classes.btns}>
                  <div className={classes.view}>Live Demo</div>
                  <div className={classes.imm}>
                    <img src="/icons8-github.svg" alt="" />
                    <div className={classes.cir}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
