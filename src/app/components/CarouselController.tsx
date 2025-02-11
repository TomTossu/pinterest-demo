'use client';
import React, { useEffect, useState } from 'react';
import Subtitle from './Subtitle';
import Slider from './Slider';

const CarouselController = ({ groupsOfImages }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  console.log('index', index);

  return (
    <div className='flex flex-col items-center'>
      <Subtitle index={index} />
      <Slider index={index} groupsOfImages={groupsOfImages} />
    </div>
  );
};

export default CarouselController;
