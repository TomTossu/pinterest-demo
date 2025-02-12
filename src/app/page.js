import React from 'react';
import Title from './components/Title';
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
  const data = await fetch('https://picsum.photos/v2/list?limit=25');
  const images = await data.json();

  const baseGroups = Array.from({ length: 5 }, (_, i) => ({
    images: shuffleArray(images.slice(i * 5, i * 5 + 5)),
    marginTop: i === 1 || i === 3 ? '180px' : i === 2 ? '260px' : '100px',
  }));

  const groupsOfImages = Array.from({ length: 4 }, () =>
    baseGroups.map((group) => ({
      ...group,
      images: shuffleArray(group.images),
    }))
  );

  return (
    <div className='h-screen'>
      <Title />
      <CarouselController groupsOfImages={groupsOfImages} />
      <div className='bg-custom-gradient h-[200px] absolute w-full bottom-0'></div>
    </div>
  );
};

export default Home;
