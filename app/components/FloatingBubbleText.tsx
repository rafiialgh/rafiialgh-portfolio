"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "你好",
  "Hola",
  "Bonjour",
  "こんにちは",
  "안녕하세요",
  "Ciao",
  "Hallo",
];

export default function FloatingBubbleText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text = greetings[index];
    let i = 0;

    setDisplayText("");

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(typing);
      }
    }, 100);

    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => {
      clearInterval(typing);
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <motion.div
      className="absolute top-16 right-[30%] z-20"
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="bubble w-28 text-center font-plusJakartaSans bg-white px-4 py-2 rounded-full shadow-lg">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="inline-block min-h-[1.5rem] font-medium text-gray-800"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}