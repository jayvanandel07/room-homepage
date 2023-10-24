import React, { useState, useEffect, useRef } from "react";
import styles from "./Slides.module.css";
import HomePageData from "../../assets/homePageData.json";
import useScreenWidth from "../../hooks/useScreenWidth";

import arrowLeft from "../../../public/images/icon-angle-left.svg";
import arrowRight from "../../../public/images/icon-angle-right.svg";

function Slides() {
  const screenWidth = useScreenWidth();
  const [slide, setSlide] = useState(0);
  const screenType = screenWidth < 1280 ? 0 : 1;

  const listRef = useRef();

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.scrollTo(list.clientWidth * slide, { behavior: "smooth" });
    }
    const handleKeyDown = (event) => {
      const arrowKey = event.key;

      switch (arrowKey) {
        case "ArrowLeft":
          setSlide((slide) => (slide - 1 < 0 ? 2 : slide - 1));
          break;
        case "ArrowRight":
          setSlide((slide) => (slide + 1 > 2 ? 0 : slide + 1));
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slide]);
  return (
    <>
      <div className={`${styles.slidesContainer}`}>
        <div className={`${styles.slides} ${styles.scroller}`}>
          <ul className={`${styles.innerScroller}`} ref={listRef}>
            {HomePageData.slidesData.map((slideData, index) => {
              return (
                <li key={slideData.image[screenType]}>
                  <img src={slideData.image[screenType]} alt="slide image" />
                </li>
              );
            })}
          </ul>
          {screenWidth < 1280 && (
            <div className={`${styles.slideNavigator}`}>
              <img
                src={arrowLeft}
                alt="arrow left icon"
                onClick={() => {
                  setSlide((slide) => (slide - 1 < 0 ? 2 : slide - 1));
                }}
              />
              <img
                src={arrowRight}
                alt="arrow right icon"
                onClick={() => {
                  setSlide((slide) => (slide + 1 > 2 ? 0 : slide + 1));
                }}
              />
            </div>
          )}
        </div>
        <div className={`${styles.slideContentContainer}`}>
          {screenWidth >= 1280 && (
            <div className={`${styles.slideNavigator}`}>
              <img
                src={arrowLeft}
                alt="arrow left icon"
                onClick={() => {
                  setSlide((slide) => (slide - 1 < 0 ? 2 : slide - 1));
                }}
              />
              <img
                src={arrowRight}
                alt="arrow right icon"
                onClick={() => {
                  setSlide((slide) => (slide + 1 > 2 ? 0 : slide + 1));
                }}
              />
            </div>
          )}
          <div className={`${styles.title}`}>
            {HomePageData.slidesData[0].title}
          </div>
          <div className={`${styles.description}`}>
            {HomePageData.slidesData[0].description}
          </div>
          <div className={`${styles.shopNow}`}></div>
        </div>
      </div>
      <div className={`${styles.aboutContainer}`}>
        <span>
          <img src={HomePageData.aboutData.images[0]} alt="about image" />
        </span>
        <span>
          <div className={`${styles.title}`}>
            {HomePageData.aboutData.title}
          </div>
          <div className={`${styles.description}`}>
            {HomePageData.aboutData.description}
          </div>
        </span>
        <span>
          <img src={HomePageData.aboutData.images[1]} alt="about image" />
        </span>
      </div>
    </>
  );
}

export default Slides;
