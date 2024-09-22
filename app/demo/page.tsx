"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

const DemoPage = () => {
  //handle click
  const handleClick = () => {
    const el = document.getElementById("el");
    const text = document.getElementById("text");
    el?.classList.add("rings-animation");
    text?.classList.add("text-animation");
    setTimeout(() => {
      el?.classList.remove("rings-animation");
      text?.classList.remove("text-animation");
    }, 2000);
  };
  return (
    <div className="w-full h-full grow grid place-items-center bg-[#1b1b1b]">
      <div className="relative flex flex-col items-center">
        <div className="absolute -translate-y-full text-primary-foreground text-xs py-2 cursor-default">
          <pre id="text" className="opacity-0 disab">
            "Button Clicked"
          </pre>
        </div>
        <motion.div
          className="relative"
          whileTap={{
            scale: 0.8,
          }}
        >
          <Button variant="secondary" id="el" onClick={handleClick}>
            Enter Product Analytics
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DemoPage;
