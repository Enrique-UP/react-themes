import { useEffect, useState } from "react";

import { Global } from "./Global";

const Scrolltotop = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <a className="callRight icon" href={Global.numTel}>&#xa001;</a>
      <button onClick={scrollToTop} className={`scrollTop icon ${isFixed ? "fixed" : ""}`}>&#xa031;</button>
    </>
  );
};

export default Scrolltotop;