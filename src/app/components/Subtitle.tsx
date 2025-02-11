'use client';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const subtitles = [
  { text: 'First subtitle', color: '#FF6347' },
  { text: 'Second subtitle', color: '#32CD32' },
  { text: 'Third subtitle', color: '#1E90FF' },
  { text: 'Fourth subtitle', color: '#FFD700' },
  { text: 'Fifth subtitle', color: '#FF4500' },
];

const Subtitle = ({ index }) => {
  return (
    <div className='relative w-full text-[30px] font-semibold text-center'>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
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
