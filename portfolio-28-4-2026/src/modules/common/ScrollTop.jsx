import { useEffect, useState } from "react";
import { Global } from "./Global";

export default function ScrollTop() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollUp = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <a className="callRight icon" href={Global.numTel}>&#xa001;</a>
      <button onClick={ScrollUp} className={`scrollTop icon ${isFixed ? "fixed" : ""}`}>&#xa031;</button>
    </>
  );
};
