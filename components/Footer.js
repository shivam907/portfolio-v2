import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerLeft}>
        <div className={classes.footerLink}>find me :</div>
        <div className={classes.footerLink}>
          <img src="/icons8-instagram (1).svg" alt="" />
        </div>
        <div className={classes.footerLink}>
          <img src="/icons8-linkedin.svg" alt="" />
        </div>
      </div>
      <div className={classes.github}>
        <div className={classes.footerLink1}>shivam907</div>
        <img src="/icons8-github.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
