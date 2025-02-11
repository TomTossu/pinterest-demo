import React from 'react';

const Slider = async () => {
  const data = await fetch('https://picsum.photos/v2/list?limit=40');
  const images = await data.json();

  return (
    <div className='flex flex-col items-center justify-end h-[10vh]'>
      Slider
    </div>
  );
};

export default Slider;
