import React from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Slider from './components/Slider';
import CarouselController from './components/CarouselController';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Home = async () => {
  const data = await fetch('https://picsum.photos/v2/list?limit=50');
  const images = await data.json();

  const baseGroups = Array.from({ length: 5 }, (_, i) => ({
    images: shuffleArray(images.slice(i * 10, i * 10 + 10)),
    marginTop: i === 1 || i === 3 ? '100px' : i === 2 ? '200px' : '0px',
  }));

  const groupsOfImages = Array.from({ length: 5 }, () =>
    baseGroups.map((group) => ({
      ...group,
      images: shuffleArray(group.images),
    }))
  );

  return (
    <div className='h-screen'>
      <Title />
      <CarouselController groupsOfImages={groupsOfImages} />
    </div>
  );
};

export default Home;
