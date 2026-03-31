import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CommonScript() {
  const location = useLocation();
  useEffect(() => {

    /* ==============================
    For colors
    ============================== */
    {
      const items = document.querySelectorAll(".colors article");
      const totalClasses = 10;
      let i = 1;
      items.forEach((li) => {
        if (i > totalClasses) i = 1;
        li.style.setProperty("--c2", `var(--cb${i})`);
        i++;
      });
    }

    /* ==============================
    For image lazy load
    ============================== */ 
    // {
    //   if (!!window.IntersectionObserver) {
    //     const observer = new IntersectionObserver((entries, observer) => {
    //       entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //           const img = entry.target;
    //           const realSrc = img.getAttribute("data-src");
    //           if (realSrc) img.src = realSrc;
    //           img.removeAttribute("data-src");
    //           observer.unobserve(img);
    //         }
    //       });
    //     }, { rootMargin: "0px 0px 100px 0px" });
    //     document.querySelectorAll('img[data-src]').forEach(img => { 
    //       observer.observe(img);
    //     });
    //   }
    //   else console.warn("This API is not supported by your browser, so you can't see the effect.");
    // }


    /* ==============================
    For masonry grid
    ============================== */
    // {
    //   function resizeImage(){
    //     document.querySelectorAll(".partition article").forEach(function(e){
    //       const h = e.querySelector("figure").getBoundingClientRect().height;
    //       const style = window.getComputedStyle(e);
    //       const marginBottom = parseFloat(style.marginBottom);
    //       e.style.setProperty("--num", parseInt(h + marginBottom));
    //     });
    //   }
    //   window.addEventListener("load", resizeImage);
    //   window.addEventListener("resize", resizeImage);
    //   document.querySelectorAll(".partition img").forEach(img => img.addEventListener("load", resizeImage));
    // }


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
              const src = img.getAttribute("data-src");
              const article = img.closest('article');
              if (src) {
                img.src = src;
                img.removeAttribute("data-src");
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
        document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
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

export default CommonScript;