import React from "react";
import logo from "../../../../../public/images/logo.svg";
import burgerIcon from "../../../../../public/images/icon-hamburger.svg";
import closeIcon from "../../../../../public/images/icon-close.svg";
import styles from "./NavMobile.module.css";
import { useState } from "react";

function NavMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <img
        src={burgerIcon}
        alt="burger icon"
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
      />
      <img
        src={logo}
        alt="logo"
        className={`${menuOpen ? styles.logoFadeOut : styles.logoFadeIn}`}
      />
      <div
        className={`${styles.menu} ${menuOpen ? styles.open : styles.close}`}
      >
        <img
          src={closeIcon}
          alt="close icon"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        />
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default NavMobile;
