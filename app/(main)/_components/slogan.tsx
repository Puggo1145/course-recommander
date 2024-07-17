"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const texts = [
  "课程链接，丢进来!",
  "想学什么，说出来!",
  "学习路线，找出来!",
]

const textVariants = {
  hidden: { y: 80, opacity: 0, filter: `blur(5px)` },
  visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  exit: { y: -40, opacity: 0, filter: `blur(5px)` },
};

interface SloganProps {
  interval?: number;
  duration?: number;
}

const Slogan: React.FC<SloganProps> = ({ 
  interval = 3000, 
  duration = 1, 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval); // 每3秒切换一次文本

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-[300px] w-full h-9 relative flex items-center justify-center">
      <AnimatePresence>
        {texts.map((text, index) => (
          index === currentTextIndex && (
            <motion.div
              key={text}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
              transition={{ 
                duration: duration, 
                ease: "easeInOut",
              }}
              className="absolute text-3xl font-bold text-center"
            >
              {text}
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Slogan;