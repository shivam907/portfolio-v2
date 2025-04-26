"use client";
import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (index) => {
    setActive(index);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "_hello", index: 0 },
    { path: "/about", label: "_about-me", index: 1 },
    { path: "/projects", label: "_projects", index: 2 },
    { path: "/resume", label: "_resume", index: 4 },
    { path: "/contact", label: "_contact-me", index: 3 },
  ];

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.leftNavItems}>
          <Link href="/">
            <div className={classes.nameHeading}>shivam-kaushal</div>
          </Link>
          <div className={classes.navl}>
            <div className={classes.navLinks}>
              {navLinks.slice(0, -1).map((link) => (
                <Link key={link.path} href={link.path}>
                  <div
                    className={`${classes.navLink} ${
                      active == link.index ? classes.navLinkActive : ""
                    }`}
                    onClick={() => handleLinkClick(link.index)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href="/contact">
          <div
            className={`${classes.navLink} ${
              active == 3 ? classes.navLinkActive : ""
            }`}
            onClick={() => handleLinkClick(3)}
          >
            _contact-me
          </div>
        </Link>
        <img
          className={classes.menu}
          src="/menu.png"
          alt="Menu"
          onClick={toggleMenu}
        />
      </nav>

      <div className={`${classes.mobileMenu} ${isMenuOpen ? classes.active : ""}`}>
        <img
          className={classes.closeMenu}
          src="/close-icon.webp"
          alt="Close"
          onClick={toggleMenu}
        />
        <div className={classes.mobileMenuContent}>
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <div
                className={`${classes.mobileMenuLink} ${
                  active == link.index ? classes.active : ""
                }`}
                onClick={() => handleLinkClick(link.index)}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
