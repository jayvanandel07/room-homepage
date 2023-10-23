import React from "react";
import styles from "./navbar.module.css";
import NavMobile from "./mobile/NavMobile";
import NavDesktop from "./desktop/NavDesktop";
import { useEffect, useState, useMemo } from "react";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useMemo(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  console.log(screenWidth);
  return <nav>{screenWidth <= 1280 ? <NavMobile /> : <NavDesktop />}</nav>;
}

export default Navbar;
