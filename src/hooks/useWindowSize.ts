import { useEffect, useState } from "react";
import type { Size } from "../types";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 1,
    height: 1,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
