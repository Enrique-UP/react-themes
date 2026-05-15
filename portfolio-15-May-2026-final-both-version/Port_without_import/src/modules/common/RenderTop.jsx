import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
export default function RenderTop({ children }) {
  const { pathname } = useLocation();
 
  useEffect(() => {
    //if (pathname != "/contact") window.scrollTo(0, 0);
    if (pathname){
      window.scrollTo(0, 0);
      
      const back = document.body;
      if (back) back.classList.remove("back");
      
      const nav = document.querySelector("header .headerBottom .navBar");
      if (nav) nav.classList.remove("active");
    }
  }, [pathname]);
 
  return children;
}