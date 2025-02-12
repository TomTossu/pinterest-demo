'use client';
import Image from 'next/image';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Slider = ({ groupsOfImages, index }) => {
  return (
    <div className='flex flex-col items-center justify-end mt-[0px] h-[88vh] overflow-hidden'>
      <div className='grid grid-cols-5 gap-4 w-full h-full'>
        <AnimatePresence mode='wait'>
          {groupsOfImages[index].map((group, columnIndex) => (
            <motion.div
              initial={{ opacity: 0, y: '2%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-2%' }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: columnIndex * 0.1,
              }}
              key={`${index}-${columnIndex}`}
              className='flex flex-col gap-4'
              style={{ marginTop: group.marginTop }}>
              {group.images.map((image) => (
                <div
                  key={image.id}
                  className='w-auto h-[400px] rounded-lg overflow-hidden'>
                  <Image
                    src={image.download_url}
                    alt={image.author}
                    className='object-cover w-full h-full'
                    width={200}
                    height={200}
                    priority
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
