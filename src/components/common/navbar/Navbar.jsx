import React from "react";
// import logo from "/images/logo.svg";
import styles from "./navbar.module.css";
import NavMobile from "./mobile/NavMobile";
function Navbar() {
  return (
    <nav>
      <NavMobile />
    </nav>
  );
}

export default Navbar;
