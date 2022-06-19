import { useState } from "react";

const useScreeWidthLogger = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));
  return { width };
};

export default useScreeWidthLogger;
