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
  const [name, changeName] = React.useState("");
  const [email, changeEmail] = React.useState("");
  const [message, changeMessage] = React.useState("");
  const [form, formSubmitted] = React.useState(false);
  const formHandler = () => {
    formSubmitted(true);
    changeName("");
    changeEmail("");
    changeMessage("");
  };
  let arr = [];
  React.useEffect(() => {
    setTimeout(function () {
      formSubmitted(false);
    }, 5000);
  }, [form]);

  for (let i = 1; i <= 12; i++) {
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
            <div className={classes.fileOpenedName}>contact-me</div>
            <div className={classes.fileIcons}>
              <img src="/close-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className={classes.contactData}>
          <div className={classes.inp1}>
            <label htmlFor="">_name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                changeName(e.target.value);
              }}
            />
          </div>
          <div className={classes.inp1}>
            <label htmlFor="">_email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                changeEmail(e.target.value);
              }}
            />
          </div>
          <div className={classes.inp1}>
            <label htmlFor="">_message:</label>
            <textarea
              type="text"
              value={message}
              onChange={(e) => {
                changeMessage(e.target.value);
              }}
            />
          </div>
          <div className={classes.view} onClick={formHandler}>
            submit-message
          </div>
        </div>
      </div>
      <div className={classes.code}>
        <div className={classes.displayFile}>
          <div className={classes.numbers}>{...arr}</div>
          <div class={classes.displayFileContent}>
            <div className={classes.p}>
              <div className={classes.type}>const </div>
              <div className={classes.space}></div>
              <div className={classes.variableName}> button </div>
              <div className={classes.space}></div>
              <div className={classes.type}> = </div>
              <div className={classes.space}></div>
              <div className={classes.variableName}>
                {" "}
                document.querySelector
              </div>
              (<div className={classes.data}>'#sendBtn'</div>);
            </div>
            <div className={classes.p}>
              <div className={classes.space}></div>
            </div>
            <div className={classes.p}>
              <div className={classes.type}>const</div>
              <div className={classes.space}></div>
              <div className={classes.variableName}>message</div>
              <div className={classes.space}></div>
              <div className={classes.type}>=</div>
              <div className={classes.space}></div>
              {"{"}
            </div>
            <div className={classes.p}>
              <div className={classes.space}></div>
              <div className={classes.space}></div>
              <div className={classes.variableName}>name:</div>
              <div className={classes.space}></div>
              <div className={classes.data}>"{name}"</div>,
            </div>
            <div className={classes.p}>
              <div className={classes.space}></div>
              <div className={classes.space}></div>
              <div className={classes.variableName}>email:</div>
              <div className={classes.space}></div>
              <div className={classes.data}>"{email}"</div>,
            </div>
            <div className={classes.p}>
              <div className={classes.space}></div>
              <div className={classes.space}></div>
              <div className={classes.variableName}>message:</div>
              <div className={classes.space}></div>
              <div className={classes.data}>"{message}"</div>,
            </div>
            <div className={classes.p}>{"}"}</div>
            <div className={classes.p}>
              <div className={classes.variableName}>
                button.addEventListener
              </div>
              (<div className={classes.data}>'click'</div>,
              <div className={classes.space}></div>
              ()
              <div className={classes.space}></div>
              <div className={classes.type}>{"=>"}</div>
              <div className={classes.space}></div>
              {"{"}
            </div>
            <div className={classes.p}>
              <div className={classes.space}></div>
              <div className={classes.space}></div>
              <div className={classes.variableName}>form.send</div>(
              <div className={classes.variableName}>message</div>
              );
            </div>
            <div className={classes.p}>{"})"}</div>
            {/* <div className={classes.p}>{i}</div>
            <div className={classes.p}>{i}</div> */}
          </div>
        </div>
      </div>
      {form && (
        <div className={classes.submitted}>
          <div className={classes.submit}>
            <img src="/icons8-checkmark-48.png" alt="" />
            <p>Form Submitted Successfully</p>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
