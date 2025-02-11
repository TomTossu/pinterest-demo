import React from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Slider from './components/Slider';

const Home = async () => {
  const data = await fetch('https://picsum.photos/v2/list?limit=50');
  const images = await data.json();

  return (
    <div className='h-screen'>
      <Title />
      <Subtitle />
      <Slider images={images} />
    </div>
  );
};

export default Home;
