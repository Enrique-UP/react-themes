import { useState, useEffect, useRef } from "react";

export default function CounterNum({ 
  target = 100, 
  duration = 2000,
  prefix = "",
  suffix = ""
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const article = el.closest("article"); // parent

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;

            let value;
            if (start >= target) {
              value = target;
              clearInterval(timer);
            } else {
              value = Math.floor(start);
            }

            setCount(value);

            if (article) {
              article.style.setProperty("--width", value + "%");
            }

          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} data-start="" data-end="">{prefix}{count}{suffix}</span>;
}