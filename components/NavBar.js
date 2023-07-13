"use client";
import React from "react";
import classes from "./NavBar.module.css";
import Link from "next/link";
const NavBar = () => {
  const [active, setActive] = React.useState(0);
  return (
    <nav className={classes.nav}>
      <div className={classes.leftNavItems}>
        <Link href="/">
          <div className={classes.nameHeading}>shivam-kaushal</div>
        </Link>
        <div className={classes.navl}>
          <div className={classes.navLinks}>
            <Link href="/">
              <div
                className={`${classes.navLink} ${
                  active == 0 ? classes.navLinkActive : ""
                }`}
                onClick={() => {
                  setActive(0);
                }}
              >
                _hello
              </div>
            </Link>
            <Link href="/about">
              <div
                className={`${classes.navLink} ${
                  active == 1 ? classes.navLinkActive : ""
                }`}
                onClick={() => {
                  setActive(1);
                }}
              >
                _about-me
              </div>
            </Link>
            <Link href="/projects">
              <div
                className={`${classes.navLink} ${
                  active == 2 ? classes.navLinkActive : ""
                }`}
                onClick={() => {
                  setActive(2);
                }}
              >
                _projects
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Link href="/contact">

      <div
        className={`${classes.navLink} ${
          active == 3 ? classes.navLinkActive : ""
        }`}
        onClick={() => {
          setActive(3);
        }}
      >
        _contact-me
      </div>
      </Link>
    </nav>
  );
};

export default NavBar;
