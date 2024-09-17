"use client";
import React from "react";
import classes from "./NavBar.module.css";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
const NavBar = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams);
  const pathname = usePathname();
  console.log("path", pathname);
  const [active, setActive] = React.useState(
    pathname == "/about"
      ? 1
      : pathname == "/projects"
      ? 2
      : pathname == "/contact"
      ? 3
      : pathname == "/resume"
      ? 4
      : 0
  );
  // React.useEffect(()=>{

  //   setActive(pathname == "/about" ? 1 : pathname == "/projects" ? 2 : pathname=="/contact"?3:0);
  // },[pathname])
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
            <Link href="projects">
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
            <Link href="resume">
              <div
                className={`${classes.navLink} ${
                  active == 4 ? classes.navLinkActive : ""
                }`}
                onClick={() => {
                  setActive(4);
                }}
              >
                _resume
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
      <img className={classes.menu} src="/menu.png" alt="" />
    </nav>
  );
};

export default NavBar;
