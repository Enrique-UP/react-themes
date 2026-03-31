import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function TextSlider() {
  const [text] = useTypewriter({
    words: [
      "<em>Good Morning!</em>",
      "<i>Good Afternoon!</i>",
      "<b>Good Evening!</b>",
      "<u>Good Night!</u>"
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 10,
    delaySpeed: 1500,
  });

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: text }} />
      <Cursor cursorColor="black" />
    </>
  );
}

export default TextSlider;