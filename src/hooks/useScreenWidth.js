import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

function useScreenWidth() {
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
  return screenWidth;
}

export default useScreenWidth