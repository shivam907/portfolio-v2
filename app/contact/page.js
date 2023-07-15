"use client";
import React from "react";
import { Client, Databases } from 'appwrite';
import classes from "./contact.module.css";
const page = () => {
  const client = new Client();

const databases = new Databases(client);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("645f463b27e283f3ea9d");
  const [nameErr, changeNameErr] = React.useState(false)
  const [emailErr, changeEmailErr] = React.useState(false)
  const [messageErr, changeMessageErr] = React.useState(false)
  const nameInput = React.useRef()
  const emailInput = React.useRef()
  const messageInput = React.useRef()
  const [name, changeName] = React.useState("");
  const [email, changeEmail] = React.useState("");
  const [message, changeMessage] = React.useState("");
  const [form, formSubmitted] = React.useState(false);
  const [workspace1, changeWorkspace1] = React.useState(true);
  const [workspace2, changeWorkspace2] = React.useState(true);
  const formHandler = async() => {
    // formSubmitted(true);
    // changeEmail("");
    // changeMessage("");
    // console.log(nameInput.current.value);
    let a=0;
    if(nameInput.current.value.length<1){
      changeNameErr(true)
    }
    else{
      a+=1
      changeNameErr(false)
    }
    if(emailInput.current.value.length>1 && emailInput.current.value.includes('@') && emailInput.current.value.includes('.')){
      
      changeEmailErr(false)
      a+=1
    }
    else{
      changeEmailErr(true)
    }
    if(messageInput.current.value.length>1){
      changeMessageErr(false)
      a+=1
    }
    else{
      changeMessageErr(true)
    }
    if(a==3){
      const promise = databases.createDocument(
        "64b1ad91134c9cd6a637",
        "64b1add1590711ef1bf7",
        Math.random().toString(),
        {name:name,
        email:email,
      message:message}
      );

      promise.then(
        function (response) {
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
      formSubmitted(true);
      changeName('');
      changeEmail('');
      changeMessage('');
    }
  };
  let arr = [];
  React.useEffect(() => {
    setTimeout(function () {
      formSubmitted(false);
    }, 5000);
  }, [form]);

  for (let i = 1; i <= 9; i++) {
    arr.push(<div className={classes.number}>{i}</div>);
  }

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
        <div className={classes.contacts}>
          <div
            className={classes.heading}
            onClick={() => {
              changeWorkspace1(workspace1 ? false : true);
            }}
          >
            <div className={classes.icon}>
              <img
                className={workspace1 ? "" : classes.rotated}
                src="/icon.webp"
                alt=""
              />
            </div>
            <div className={classes.name}>contacts</div>
          </div>
          {workspace1 && (
            <div className={classes.folders}>
              <div className={classes.folderHead}>
                <div className={classes.fileIcon}>
                  <img src="/mail-icon.webp" alt="" />
                </div>
                <div className={classes.fileName}>shivam@academer.co</div>
              </div>
              <div className={classes.folderHead}>
                <div className={classes.fileIcon}>
                  <img src="/phone-icon.webp" alt="" />
                </div>
                <div className={classes.fileName}>+91 8968969929</div>
              </div>
              <div className={`${classes.fileActive} ${classes.folderHead}`}>
                <div className={classes.fileIcon}>
                  <img src="/markdown.webp" alt="" />
                </div>
                <div className={classes.fileName}>contact-me.md</div>
              </div>
            </div>
          )}
        </div>
        <div
          className={classes.contacts}
          onClick={() => {
            changeWorkspace2(workspace2 ? false : true);
          }}
        >
          <div
            className={classes.heading}
            onClick={() => {
              changeWorkspace2(workspace2 ? false : true);
            }}
          >
            <div className={classes.icon}>
              <img
                className={workspace2 ? "" : classes.rotated}
                src="/icon.webp"
                alt=""
              />
            </div>
            <div className={classes.name}>find-me-also-in</div>
          </div>
          {workspace2 && (
            <div className={classes.folders}>
              <div className={classes.folderHead}>
                <div className={classes.fileIcon}>
                  <img src="/redirect.webp" alt="" />
                </div>
                <div className={classes.fileName}>Stackoverflow</div>
              </div>
              <div className={classes.folderHead}>
                <div className={classes.fileIcon}>
                  <img src="/redirect.webp" alt="" />
                </div>
                <div className={classes.fileName}>Leetcode</div>
              </div>
              <div className={classes.folderHead}>
                <div className={classes.fileIcon}>
                  <img src="/redirect.webp" alt="" />
                </div>
                <div className={classes.fileName}>Linkedin</div>
              </div>
              <div className={classes.folderHead}>
                <div className={classes.fileIcon}>
                  <img src="/redirect.webp" alt="" />
                </div>
                <div className={classes.fileName}>Instagram</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.upperBar}>
          <div className={classes.fileOpened}>
            <div className={classes.fileOpenedName}>contact-me.md</div>
            <div className={classes.fileIcons}>
              <img src="/close-icon.webp" alt="" />
            </div>
          </div>
        </div>
        <div className={classes.contactData}>
          <div className={classes.inp1}>
          <div className={classes.label}>

            <label className={`${nameErr? classes.err:''}`} htmlFor="">_name:</label>
            <label className={`${nameErr? classes.err:classes.none}`} htmlFor="">invalid-input</label>
          </div>
            <input
            className={nameErr?classes.error:''}
              type="text"
              value={name}
              ref={nameInput}
              onChange={(e) => {
                changeName(e.target.value);
              }}
            />
          </div>
          <div className={classes.inp1}>
          <div className={classes.label}>

            <label className={`${emailErr? classes.err:''}`} htmlFor="">_email:</label>
            <label className={`${emailErr? classes.err:classes.none}`} htmlFor="">invalid-input</label>
          </div>
            <input
            className={emailErr?classes.error:''}
              type="email"
              ref={emailInput}
              value={email}
              onChange={(e) => {
                changeEmail(e.target.value);
              }}
            />
          </div>
          <div className={classes.inp1}>
          <div className={classes.label}>

            <label className={`${messageErr? classes.err:''}`} htmlFor="">_message:</label>
            <label className={`${messageErr? classes.err:classes.none}`} htmlFor="">invalid-input</label>
          </div>
            <textarea
            className={messageErr?classes.error:''}
              type="text"
              ref={messageInput}
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
            {/* <div className={classes.p}>
              <div className={classes.space}></div>
            </div> */}
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
            <img src="/icons8-checkmark-48.webp" alt="" />
            <p>Form Submitted Successfully</p>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
