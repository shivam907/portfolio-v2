import React from "react";
import classes from "./NavBar.module.css";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.leftNavItems}>
        <Link href="/">
          <div className={classes.nameHeading}>shivam-kaushal</div>
        </Link>
        <div className={classes.navl}>
          <div className={classes.navLinks}>
            <div className={`${classes.navLink} ${classes.navLinkActive}`}>
              _hello
            </div>
            <Link href="/about">
              <div className={classes.navLink}>_about-me</div>
            </Link>
            <div className={classes.navLink}>_projects</div>
          </div>
        </div>
      </div>
      <div className={classes.navLink}>_contact-me</div>
    </nav>
  );
};

export default NavBar;
