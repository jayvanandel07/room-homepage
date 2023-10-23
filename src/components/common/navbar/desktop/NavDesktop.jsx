import React from "react";
import logo from "../../../../../public/images/logo.svg";
import styles from "./NavDesktop.module.css";

function NavDesktop() {
  return (
    <>
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default NavDesktop;
