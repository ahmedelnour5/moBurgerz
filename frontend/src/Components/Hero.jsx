import React from 'react';
import truckImage from '../assets/truck.jpeg';

const Hero = () => {
  return (
    <div
      className="w-full h-full bg-cover  bg-no-repeat bg-center  m-0 p-0 "
      style={{ backgroundImage: `url(${truckImage})` }}
    ></div>
  );
};

export default Hero;
