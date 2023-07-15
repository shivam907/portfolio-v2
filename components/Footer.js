import React from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerLeft}>
        <div className={classes.footerLink}>find me :</div>
        <div className={classes.footerLink}>
          <Link href="https://instagram.com/shivam907">
            <img src="/icons8-instagram (1).webp" alt="" />
          </Link>
        </div>
        <div className={classes.footerLink}>
          <Link href="https://linkedin.com/in/shivam907">
            <img src="/icons8-linkedin.webp" alt="" />
          </Link>
        </div>
      </div>
      <div className={classes.github}>
        <Link href="https://github.com/shivam907">
          <div className={classes.footerLink1}>shivam907</div>
        </Link>
        <img src="/icons8-github.webp" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
