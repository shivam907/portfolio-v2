"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import classes from "./project.module.css";
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
          <div className={classes.heading}>
            <div className={classes.icon}>
              <img src="/icon.png" alt="" />
            </div>
            <div className={classes.name}>personal-info</div>
          </div>
          <div className={classes.folders}>
            <div className={classes.folder}>
              <div
                className={classes.folderHead}
                onClick={() => changeFolder1(folder1 ? false : true)}
              >
                <div className={`${folder1 ? classes.folderIconActive : ""}`}>
                  <img src="/folderIcon.png" alt="" />
                </div>
                <div className={classes.folderImage}>
                  <img src="/folder1.png" alt="" />
                </div>
                <div className={classes.folderName}>bio</div>
              </div>
              {folder1 && (
                <div className={classes.folderContent}>
                  <div
                    className={`${fileActive == 1 ? classes.fileActive : ""} ${
                      classes.file
                    }`}
                    onClick={() => {
                      changeFileActive(1);
                    }}
                  >
                    <div className={classes.fileIcon}>
                      <img src="/markdown.png" alt="" />
                    </div>
                    <div className={classes.fileName}>bio.md</div>
                  </div>
                  {/* <div className={`${fileActive==1?classes.fileActive:''} ${classes.file}`} onClick=()=>{changeFileActive(1)}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div> */}
                </div>
              )}
            </div>
            <div className={classes.folder}>
              <div
                className={classes.folderHead}
                onClick={() => changeFolder2(folder2 ? false : true)}
              >
                <div className={`${folder2 ? classes.folderIconActive : ""}`}>
                  <img src="/folderIcon.png" alt="" />
                </div>
                <div className={classes.folderImage}>
                  <img src="/folder2.png" alt="" />
                </div>
                <div className={classes.folderName}>interests</div>
              </div>

              {folder2 && (
                <div className={classes.folderContent}>
                  {/* <div className={`${fileActive==1?classes.fileActive:''} ${classes.file}`} onClick=()=>{changeFileActive(1)}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div> */}
                  <div
                    className={`${fileActive == 2 ? classes.fileActive : ""} ${
                      classes.file
                    }`}
                    onClick={() => {
                      changeFileActive(2);
                    }}
                  >
                    <div className={classes.fileIcon}>
                      <img src="/markdown.png" alt="" />
                    </div>
                    <div className={classes.fileName}>interests.md</div>
                  </div>
                </div>
              )}
            </div>
            <div className={classes.folder}>
              <div
                className={classes.folderHead}
                onClick={() => changeFolder3(folder3 ? false : true)}
              >
                <div className={`${folder3 ? classes.folderIconActive : ""}`}>
                  <img src="/folderIcon.png" alt="" />
                </div>
                <div className={classes.folderImage}>
                  <img src="/folder3.png" alt="" />
                </div>
                <div className={classes.folderName}>education</div>
              </div>

              {folder3 && (
                <div className={classes.folderContent}>
                  {/* <div className={`${fileActive==1?classes.fileActive:''} ${classes.file}`} onClick=()=>{changeFileActive(1)}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div> */}
                  <div
                    className={`${fileActive == 3 ? classes.fileActive : ""} ${
                      classes.file
                    }`}
                    onClick={() => {
                      changeFileActive(3);
                    }}
                  >
                    <div className={classes.fileIcon}>
                      <img src="/markdown.png" alt="" />
                    </div>
                    <div className={classes.fileName}>education.md</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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
      </div>
      <div className={classes.code}>
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
        {file}
      </div>
      <div className={classes.snippets}>
        <div className={classes.snippetHead}>// Code Snippet Showcase</div>
        <div className={classes.codeSnippets}>
          <div className={classes.codeSnippetsBox}>
            <div className={classes.codeSnippetsHead}>
              <div className={classes.profile}>
                <div className={classes.profileImg}>
                  <img src="/profile.png" alt="" />
                </div>
                <div className={classes.profileData}>
                  <div className={classes.profileName}>Shivam907</div>
                  <div className={classes.profileDate}>
                    Created 5 months ago
                  </div>
                </div>
              </div>
              <div className={classes.details}>
                <div className={classes.detail1}>
                  <img src="/comments-icon.png" alt="" />
                  <p className={classes.detailText}>details</p>
                </div>
                <div className={classes.detail1}>
                  <img src="Star.png" alt="" />
                  <p className={classes.detailText}>3 stars</p>
                </div>
              </div>
            </div>
            <div className={classes.codeBox}>
              {/* <MyCodeComponent
                code={`function initializeModelChunk<T>(
                    chunk: ResolvedModelChunk): T { 
                        const value: T = parseModel(chunk._response, chunk._value); 
                        const initializedChunk: InitializedChunk<T> = (chunk: any); 
                        initializedChunk._status = INITIALIZED; initializedChunk._value = value; return value; 
                        }
}`}
              /> */}
              <img src="/codeBlock.png" alt="" />
            </div>
          </div>
          <div className={classes.codeSnippetsBox}>
            <div className={classes.codeSnippetsHead}>
              <div className={classes.profile}>
                <div className={classes.profileImg}>
                  <img src="/profile.png" alt="" />
                </div>
                <div className={classes.profileData}>
                  <div className={classes.profileName}>Shivam907</div>
                  <div className={classes.profileDate}>
                    Created 5 months ago
                  </div>
                </div>
              </div>
              <div className={classes.details}>
                <div className={classes.detail1}>
                  <img src="/comments-icon.png" alt="" />
                  <p className={classes.detailText}>details</p>
                </div>
                <div className={classes.detail1}>
                  <img src="Star.png" alt="" />
                  <p className={classes.detailText}>3 stars</p>
                </div>
              </div>
            </div>
            <div className={classes.codeBox}>
              {/* <MyCodeComponent
                code={`function initializeModelChunk<T>(
                    chunk: ResolvedModelChunk): T { 
                        const value: T = parseModel(chunk._response, chunk._value); 
                        const initializedChunk: InitializedChunk<T> = (chunk: any); 
                        initializedChunk._status = INITIALIZED; initializedChunk._value = value; return value; 
                        }
}`}
              /> */}
              <img src="/codeBlock.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
