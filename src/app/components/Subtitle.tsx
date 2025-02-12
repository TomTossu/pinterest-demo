'use client';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const subtitles = [
  { text: 'summer outfit idea', color: 'rgb(0, 118, 211)' },
  { text: 'activity for kids', color: 'rgb(97, 140, 123)' },
  { text: 'idea for special dinner', color: 'rgb(194, 139, 0)' },
  { text: 'DIY project', color: 'rgb(64, 122, 87)' },
];

const Subtitle = ({ index }) => {
  return (
    <div className='relative w-full text-[60px] font-semibold text-center'>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='absolute w-full'
          style={{ color: subtitles[index].color }}>
          {subtitles[index].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Subtitle;
