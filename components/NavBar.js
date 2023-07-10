import React from "react";
import classes from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.leftNavItems}>
        <div className={classes.nameHeading}>shivam-kaushal</div>
        <div className={classes.navl}>
          <div className={classes.navLinks}>
            <div className={`${classes.navLink} ${classes.navLinkActive}`}>
              _hello
            </div>
            <div className={classes.navLink}>_about-me</div>
            <div className={classes.navLink}>_projects</div>
          </div>
        </div>
      </div>
      <div className={classes.navLink}>_contact-me</div>
    </nav>
  );
};

export default NavBar;
