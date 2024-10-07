import React, { useState, useEffect } from 'react';
import BillSplitter from '../components/BillSplitter';

const backgrounds = [
  'https://source.unsplash.com/random/1920x1080?abstract,art,1',
  'https://source.unsplash.com/random/1920x1080?abstract,art,2',
  'https://source.unsplash.com/random/1920x1080?abstract,art,3',
  'https://source.unsplash.com/random/1920x1080?abstract,art,4',
];

const Index = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        setFadeOut(false);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            index === currentBg ? (fadeOut ? 'opacity-0' : 'opacity-100') : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      <div className="relative z-10 w-full max-w-md p-6 backdrop-blur-lg bg-white/30 rounded-lg shadow-xl">
        <BillSplitter />
      </div>
    </div>
  );
};

export default Index;