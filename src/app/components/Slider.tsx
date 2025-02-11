'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Slider = ({ images }) => {
  const groups = Array.from({ length: 5 }, (_, i) => ({
    images: images.slice(i * 10, i * 10 + 10),
    marginTop: i === 1 || i === 3 ? '100px' : i === 2 ? '200px' : '0px',
  }));

  return (
    <div className='flex flex-col items-center justify-end mt-[0px]'>
      <div className='grid grid-cols-5 gap-4 w-full h-full'>
        {groups.map((group, index) => (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            key={index}
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
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
