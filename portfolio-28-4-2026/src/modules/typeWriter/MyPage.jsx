import { TypeWriter } from "./TypeWriter";

export default function MyPage() {
  const words1 = [
    { text: "Hello World", className: "one" },
    { text: "Welcome to India", className: "two" }
  ];

  const words2 = [
    { text: "Delhi Rocks", className: "three" },
    { text: "Mumbai Rocks", className: "four" },
    { text: "Chennai Rocks", className: "five" }
  ];

  const words3 = ["Short Texts", "Short Words"].map(text => ({
    text,
    className: "six"
  }));

  return (
    <>
      <h3>
        <TypeWriter words={words1} />
      </h3>

      <h6>
        <TypeWriter words={words2} />
      </h6>

      <p>
        <TypeWriter words={words3} />
      </p>
    </>
  );
}