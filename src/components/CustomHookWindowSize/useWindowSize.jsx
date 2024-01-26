import { useLayoutEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function windowSizeListener() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", windowSizeListener);

    return () => {
      window.removeEventListener("resize", windowSizeListener);
    };
  });

  return windowSize;
}
