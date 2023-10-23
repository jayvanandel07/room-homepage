import React from "react";
import styles from "./navbar.module.css";
import NavMobile from "./mobile/NavMobile";
import NavDesktop from "./desktop/NavDesktop";
import useScreenWidth from "../../../hooks/useScreenWidth";

import { useMemo } from "react";

function Navbar() {
  const screenWidth = useScreenWidth();

  return <nav>{screenWidth <= 1280 ? <NavMobile /> : <NavDesktop />}</nav>;
}

export default Navbar;
