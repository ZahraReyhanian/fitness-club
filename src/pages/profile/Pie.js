import React, { useState, useEffect } from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

function getRadius(windowWidth) {
  if (windowWidth) {
    if (windowWidth < 480) {
      return 50;
    } else if (windowWidth < 768) {
      return 60;
    } else if (windowWidth < 1024) {
      return 80;
    } else {
      return 80;
    }
  } else {
    return undefined;
  }
}

function getStrokeWidth(windowWidth) {
  if (windowWidth) {
    if (windowWidth < 768) {
      return "1rem";
    } else {
      return "1.5rem";
    }
  } else {
    return undefined;
  }
}

const Circle = ({ colour, pct }) => {
  const isWindowClient = typeof window === "object";

  const [r, setR] = useState(
    isWindowClient
      ? getRadius(window.innerWidth) //👈
      : undefined
  );

  const [strokeWidth, setStrokeWidth] = useState(
    isWindowClient
      ? getStrokeWidth(window.innerWidth) //👈
      : undefined
  );

  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setR(getRadius(window.innerWidth)); //👈
      setStrokeWidth(getStrokeWidth(window.innerWidth));
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //unregister the listerner on destroy of the hook
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setR, setStrokeWidth]);

  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" />
        <Circle colour={colour} pct={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default Pie;
