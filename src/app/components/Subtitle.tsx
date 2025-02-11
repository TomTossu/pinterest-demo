'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const subtitles = [
  { text: 'First subtitle', color: '#FF6347' },
  { text: 'Second subtitle', color: '#32CD32' },
  { text: 'Third subtitle', color: '#1E90FF' },
  { text: 'Fourth subtitle', color: '#FFD700' },
];

const Subtitle = () => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        setIsExiting(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full text-[30px] font-semibold text-center'>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: '100%' }}
          animate={{
            opacity: isExiting ? 0 : 1,
            y: isExiting ? '-100%' : 0,
          }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='absolute w-full'
          style={{ color: subtitles[index].color }}>
          {subtitles[index].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Subtitle;
