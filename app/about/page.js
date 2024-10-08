"use client";
import React from "react";
import classes from "./about.module.css";
import EmptyFile from "../../components/EmptyFile";
import File1 from "../../components/File1";
import File2 from "../../components/File2";
import File3 from "../../components/File3";
const page = () => {
  const [file, changeFile] = React.useState(File3);
  
  const [folder1, changeFolder1] = React.useState(true);
  const [folder2, changeFolder2] = React.useState(false);
  const [workspace1, changeworkspace1] = React.useState(true);
  const [workspace2, changeworkspace2] = React.useState(true);
  const [folder3, changeFolder3] = React.useState(false);
  const [fileActive, changeFileActive] = React.useState(1);
  const fileNames = ["bio.md", "interests.md", "education.md"];
  React.useEffect(() => {
    changeFile(fileActive == 1 ? File1 : fileActive == 2 ? File2 : fileActive==3? File3:EmptyFile);
  }, [fileActive]);
  return (
    <>
      <div className={classes.leftBar}>
        <img className={classes.img1} src="/personal-info-icon.webp" alt="" />
        <img
          className={classes.img2}
          src="/professional-info-icon.webp"
          alt=""
        />
      </div>
      <div className={classes.info}>
        <div className={classes.personalInfo}>
          <div
            className={classes.heading}
            onClick={() => {
              changeworkspace1(workspace1 ? false : true);
            }}
          >
            <div className={classes.icon}>
              <img
                className={`${workspace1 == false ? classes.rotated : ""}`}
                src="/icon.webp"
                alt=""
              />
            </div>
            <div className={classes.name}>personal-info</div>
          </div>
          {workspace1 && (
            <div className={classes.folders}>
              <div className={classes.folder}>
                <div
                  className={classes.folderHead}
                  onClick={() => changeFolder1(folder1 ? false : true)}
                >
                  <div className={`${folder1 ? classes.folderIconActive : ""}`}>
                    <img src="/folderIcon.webp" alt="" />
                  </div>
                  <div className={classes.folderImage}>
                    <img src="/folder1.webp" alt="" />
                  </div>
                  <div className={classes.folderName}>bio</div>
                </div>
                {folder1 && (
                  <div className={classes.folderContent}>
                    <div
                      className={`${
                        fileActive == 1 ? classes.fileActive : ""
                      } ${classes.file}`}
                      onClick={() => {
                        changeFileActive(1);
                      }}
                    >
                      <div className={classes.fileIcon}>
                        <img src="/markdown.webp" alt="" />
                      </div>
                      <div className={classes.fileName}>bio.md</div>
                    </div>
                    {/* <div className={`${fileActive==1?classes.fileActive:''} ${classes.file}`} onClick=()=>{changeFileActive(1)}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.webp" alt="" />
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
                    <img src="/folderIcon.webp" alt="" />
                  </div>
                  <div className={classes.folderImage}>
                    <img src="/folder2.webp" alt="" />
                  </div>
                  <div className={classes.folderName}>interests</div>
                </div>

                {folder2 && (
                  <div className={classes.folderContent}>
                    {/* <div className={`${fileActive==1?classes.fileActive:''} ${classes.file}`} onClick=()=>{changeFileActive(1)}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.webp" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div> */}
                    <div
                      className={`${
                        fileActive == 2 ? classes.fileActive : ""
                      } ${classes.file}`}
                      onClick={() => {
                        changeFileActive(2);
                      }}
                    >
                      <div className={classes.fileIcon}>
                        <img src="/markdown.webp" alt="" />
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
                    <img src="/folderIcon.webp" alt="" />
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
                    <img src="/markdown.webp" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div> */}
                    <div
                      className={`${
                        fileActive == 3 ? classes.fileActive : ""
                      } ${classes.file}`}
                      onClick={() => {
                        changeFileActive(3);
                      }}
                    >
                      <div className={classes.fileIcon}>
                        <img src="/markdown.webp" alt="" />
                      </div>
                      <div className={classes.fileName}>education.md</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className={classes.contacts}>
          <div
            className={classes.heading}
            onClick={() => {
              changeworkspace2(workspace2 ? false : true);
            }}
          >
            <div className={classes.icon}>
              <img
                className={`${workspace2 == false ? classes.rotated : ""}`}
                src="/icon.webp"
                alt=""
              />
            </div>
            <div className={classes.name}>contacts</div>
          </div>
          {workspace2 && (
            <div className={classes.folders}>
              <div className={classes.folderHead}>
                <div className={classes.fileIcon}>
                  <img src="/mail-icon.webp" alt="" />
                </div>
                <div className={classes.fileName}>syncu907@gmail.com</div>
              </div>
              <div className={classes.folderHead}>
                <div className={classes.fileIcon}>
                  <img src="/phone-icon.webp" alt="" />
                </div>
                <div className={classes.fileName}>+91 8968969929</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={classes.code}>
        {fileActive != 0 && (
          <div className={classes.upperBar}>
            <div className={classes.fileOpened}>
              <div className={classes.fileOpenedName}>
                {fileNames[fileActive - 1]}
              </div>
              <div className={classes.fileIcons}>
                <img
                  src="/close-icon.webp"
                  alt=""
                  className={classes.close}
                  onClick={() => {
                    changeFileActive(0);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {/* {fileActive==1?File1:fileActive==2?File2:fileActive==3?File3:''} */}
        {/* {fileActive} */}
        {file}
      </div>
      <div className={classes.snippets}>
        <div className={classes.snippetHead}>// Code Snippet Showcase</div>
        <div className={classes.codeSnippets}>
          <div className={classes.codeSnippetsBox}>
            <div className={classes.codeSnippetsHead}>
              <div className={classes.profile}>
                <div className={classes.profileImg}>
                  <img src="/profile.webp" alt="" />
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
                  <img src="/comments-icon.webp" alt="" />
                  <p className={classes.detailText}>details</p>
                </div>
                <div className={classes.detail1}>
                  <img src="Star.webp" alt="" />
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
              <img src="/codeBlock.webp" alt="" />
            </div>
          </div>
          <div className={classes.codeSnippetsBox}>
            <div className={classes.codeSnippetsHead}>
              <div className={classes.profile}>
                <div className={classes.profileImg}>
                  <img src="/profile.webp" alt="" />
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
                  <img src="/comments-icon.webp" alt="" />
                  <p className={classes.detailText}>details</p>
                </div>
                <div className={classes.detail1}>
                  <img src="Star.webp" alt="" />
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
              <img src="/codeBlock.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
