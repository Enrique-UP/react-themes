import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterNum = ({ end, prefix = "", suffix = "", className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={className}>
      <CountUp
        start={inView ? 0 : null}
        end={end}
        duration={3}
        prefix={prefix}
        suffix={suffix}
      />
    </div>
  );
};

export default CounterNum;