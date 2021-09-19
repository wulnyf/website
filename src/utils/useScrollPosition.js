import { useLayoutEffect, useState } from "react";

const useScrollPosition = () => {
  const [pos, setPos] = useState(0);
  useLayoutEffect(() => {
    const updatePos = () => {
      setPos(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePos);
    updatePos();
    return () => window.removeEventListener("scroll", updatePos);
  }, []);
  return pos;
};

export default useScrollPosition;
