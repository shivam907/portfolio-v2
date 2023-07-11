import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import classes from "./about.module.css";
const page = () => {
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
            <div className={classes.fileIcons}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
