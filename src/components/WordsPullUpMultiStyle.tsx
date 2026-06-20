import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Flatten segments into individual words with their respective styles
  const words = segments.flatMap((segment) => {
    const segmentWords = segment.text.split(' ').filter(w => w !== '');
    return segmentWords.map((word) => ({
      text: word,
      className: segment.className || '',
    }));
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] ${className}`}
    >
      {words.map((wordObj, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={`inline-block ${wordObj.className}`}
        >
          {wordObj.text}
        </motion.span>
      ))}
    </motion.div>
  );
};
