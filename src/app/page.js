import React from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Slider from './components/Slider';

const Home = () => {
  return (
    <div className='h-screen'>
      <Title />
      <Subtitle />
      <Slider />
    </div>
  );
};

export default Home;
