"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import classes from "./about.module.css";
import MyCodeComponent from "@/components/Code";
const page = () => {
  let arr = [];
  for (let i = 1; i <= 16; i++) {
    arr.push(<div className={classes.number}>{i}</div>);
  }
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
              <div className={classes.folderHead}>
                <div className={classes.folderIcon}>
                  <img src="/folderIcon.png" alt="" />
                </div>
                <div className={classes.folderImage}>
                  <img src="/folder1.png" alt="" />
                </div>
                <div className={classes.folderName}>bio</div>
              </div>
              <div className={classes.folderContent}>
                <div className={classes.file}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div>
                <div className={classes.file}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div>
              </div>
            </div>
            <div className={classes.folder}>
              <div className={classes.folderHead}>
                <div className={classes.folderIcon}>
                  <img src="/folderIcon.png" alt="" />
                </div>
                <div className={classes.folderImage}>
                  <img src="/folder2.png" alt="" />
                </div>
                <div className={classes.folderName}>interests</div>
              </div>
              <div className={classes.folderContent}>
                <div className={classes.file}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div>
                <div className={classes.file}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div>
              </div>
            </div>
            <div className={classes.folder}>
              <div className={classes.folderHead}>
                <div className={classes.folderIcon}>
                  <img src="/folderIcon.png" alt="" />
                </div>
                <div className={classes.folderImage}>
                  <img src="/folder3.png" alt="" />
                </div>
                <div className={classes.folderName}>education</div>
              </div>
              <div className={classes.folderContent}>
                <div className={classes.file}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div>
                <div className={classes.file}>
                  <div className={classes.fileIcon}>
                    <img src="/markdown.png" alt="" />
                  </div>
                  <div className={classes.fileName}>high-school</div>
                </div>
              </div>
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
              <div className={classes.fileName}>user@gmail.com</div>
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
            <div className={classes.fileOpenedName}>personal-info</div>
            <div className={classes.fileIcons}>
              <img src="/close-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className={classes.displayFile}>
          <div className={classes.numbers}>{...arr}</div>
          <div class={classes.displayFileContent}>
            <p class={classes.p}>/**</p>
            <p class={classes.p}>* About me</p>
            <p class={classes.p}>* I have 5 years of еxperience in web</p>
            <p class={classes.p}>* development lorem ipsum dolor sit amet,</p>
            <p class={classes.p}>
              * consectetur adipiscing elit, sed do eiusmod
            </p>
            <p class={classes.p}>* tempor incididunt ut labore et dolore</p>
            <p class={classes.p}>* magna aliqua. Ut enim ad minim veniam,</p>
            <p class={classes.p}>* quis nostrud exercitation ullamco laboris</p>
            <p class={classes.p}>* nisi ut aliquip ex ea commodo consequat.</p>
            <p class={classes.p}>* Duis aute irure dolor in reprehenderit in</p>
            <p class={classes.p}>*</p>
            <p class={classes.p}>* Duis aute irure dolor in reprehenderit in</p>
            <p class={classes.p}>
              * voluptate velit esse cillum dolore eu fugiat
            </p>
            <p class={classes.p}>* nulla pariatur. Excepteur sint occaecat</p>
            <p class={classes.p}>
              * officia deserunt mollit anim id est laborum.
            </p>
            <p class={classes.p}>*/</p>
          </div>
        </div>
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
