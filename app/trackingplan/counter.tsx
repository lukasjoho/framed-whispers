"use client";
import React from "react";

const Counter = ({ x, y }: { x: number; y: number }) => {
  //listen to any click and start counting from X to Y in 2 seconds always displaying each number
  const [currentNumber, setCurrentNumber] = React.useState(x);
  //only start interval when a click is detected

  const handleClick = () => {
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev === y) {
          clearInterval(interval);
          return prev;
        }
        const randomIncreaseBetween10and50 = Math.floor(
          Math.random() * (15 - 10 + 1) + 0
        );
        return prev + randomIncreaseBetween10and50;
      });
    }, 50);
    return () => clearInterval(interval);
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  //put each number into a separate span
  return (
    <div className="text-8xl font-semibold flex items-center">
      <span className="w-[64px] block">
        {currentNumber.toString().split("").reverse().join("")[2]}
      </span>
      <span className="w-[64px] block">
        {currentNumber.toString().split("").reverse().join("")[1]}
      </span>
      <span className="w-[64px] block">
        {currentNumber.toString().split("").reverse().join("")[0]}
      </span>
    </div>
  );
};

export default Counter;
