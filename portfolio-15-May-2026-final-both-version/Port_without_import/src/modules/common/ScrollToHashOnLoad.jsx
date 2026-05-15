import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollOffset from "./ScrollOffset";

export default function ScrollToHashOnLoad() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        ScrollOffset(el);
      }
    }
  }, [hash]);

  return null;
}