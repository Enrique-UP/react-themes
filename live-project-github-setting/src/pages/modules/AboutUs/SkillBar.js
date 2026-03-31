import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SkillBar = ({ title = "Skls", value = 50, bgClass = "" }) => {
  const [start, setStart] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) setStart(true);
  }, [inView]);

  return (
    <div className="bar-item" ref={ref}>
      
      <div className="skill-header">
        <b>{title}</b>

        <div className="count-box">
          <span className="count-text">
            {start ? <CountUp start={0} end={value} duration={2} /> : 0}
          </span>
          %
        </div>
      </div>

      <div className="bar-inner">
        <div className={`progress-line ${bgClass}`} style={{width: start ? `${value}%` : "0%"}}></div>
      </div>

    </div>
  );
};

export default SkillBar;