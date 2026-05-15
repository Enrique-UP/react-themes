import { useEffect, useState } from "react";

export function TypeWriter({ words, className = "" }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 75;
  const deleteSpeed = 25;
  const delay = 1500;

  useEffect(() => {
    const current = words[index].text;
    let timer;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, words]);

  return (
    <span className={`typeWriter ${className} ${words[index].className}`}>
      <b>
        {displayText}
        <span className="cursor">|</span>
      </b>
    </span>
  );
}