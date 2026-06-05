import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CommonScript() {
  const location = useLocation();
  useEffect(() => {

    /* ==============================
    For colors
    ============================== */
    {
      document.querySelectorAll(".colors").forEach(function(e){
        const items = e.querySelectorAll(".colors article");
        const totalClasses = 12;
        let i = 1;
        items.forEach((li) => {
          if (i > totalClasses) i = 1;
          li.style.setProperty("--u", `var(--cb${i})`);
          i++;
        });
    });
    }
    /* ==============================
    For lazy load
    ============================== */
    {
      if (!!window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const realSrc = img.getAttribute("data-src");
              if (realSrc) img.src = realSrc;
              img.removeAttribute("data-src");
              observer.unobserve(img);
            }
          });
        }, { rootMargin: "0px 0px 100px 0px" });
        document.querySelectorAll('img[data-src]').forEach(img => { 
          observer.observe(img);
        });
      }
      else console.warn("This API is not supported by your browser, so you can't see the effect.");
    }

    /* ==============================
    For masonry grid and its lazy load
    ============================== */
    {
      // 1. Single Element Resize (High Performance for 1000+ items)
      function resizeSingleArticle(article) {
        const container = document.querySelector(".partition");
        if (!container || !article) return;

        const containerStyle = window.getComputedStyle(container);
        const rowHeight = parseInt(containerStyle.gridAutoRows) || 1;
        const figure = article.querySelector("figure");
        if (figure) {
          const contentHeight = figure.getBoundingClientRect().height;
          const articleStyle = window.getComputedStyle(article);
          const marginBottom = parseFloat(articleStyle.marginBottom) || 0;
          const rowSpan = Math.ceil((contentHeight + marginBottom) / rowHeight);
          article.style.setProperty("--num", rowSpan);
        }
      }
      function resizeAllArticles() {
        document.querySelectorAll(".partition article").forEach(article => {
          resizeSingleArticle(article);
        });
      }
      if (!!window.IntersectionObserver) {
        let observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const src = img.getAttribute("data-img");
              const article = img.closest('article');
              if (src) {
                img.src = src;
                img.removeAttribute("data-img");
                img.onload = () => {
                  resizeSingleArticle(article);
                };
                if (img.complete) {
                  resizeSingleArticle(article);
                }
              }
              observer.unobserve(img);
            }
          });
        }, { rootMargin: "0px 0px 500px 0px" });
        document.querySelectorAll('img[data-img]').forEach(img => observer.observe(img));
      } else alert("This API is not supported by your browser, so you can't see the effect.");
      window.addEventListener("load", resizeAllArticles);
      window.addEventListener("resize", resizeAllArticles);
    }
    // {}
    // {}
    // {}
    // {}

  }, [location]);
  return null;
}
