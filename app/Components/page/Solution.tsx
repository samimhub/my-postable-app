"use client"

import React, { useState } from 'react';
import { Button } from '../ui/button';
import IndividualsSolution from './IndividualsSolution';
import InfluencersSolution from './InfluencersSolution';
import BusinessesSolution from './BusinessesSolution';


// Dummy components for example

const Solution = () => {
  const [activeComponent, setActiveComponent] = useState<number>(1);

  const handleToggle = (component: number) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col items-start gap-8 mx-auto max-w-5xl">
      <h1 className='text-4xl font-bold mb-4'>One Solution for All!</h1>
      <h1 className='text-xl mb-6'>Postable helps everyone to share their thoughts across multiple platforms</h1>
      <div className=" flex bg-gray-200 p-1 gap-2 rounded-lg shadow-md">
        <Button 
          className={` text-xl ${activeComponent === 1 ? 'bg-white border border-whibg-white' : ''}`}
          onClick={() => handleToggle(1)}
        >
           Individuals
        </Button>
        <Button 
          className={`text-xl ${activeComponent === 2 ? 'bg-white' : ''}`}
          onClick={() => handleToggle(2)}
        >
          Influencers
        </Button>
        <Button 
          className={`text-xl ${activeComponent === 3 ? 'bg-white' : ''}`}
          onClick={() => handleToggle(3)}
        >
          Businesses
        </Button>
      </div>
      
      <div className="w-full flex justify-center items-center text-center">
        {activeComponent === 1 && <IndividualsSolution/>}
        {activeComponent === 2 && <InfluencersSolution/>}
        {activeComponent === 3 && <BusinessesSolution/>}
      </div>
      <div className='flex justify-center items-center'>
    <Button className='bg-black text-white p-4 text-center text-lg rounded-3xl-sm w-[180px]'>Get Started for Free</Button>
    </div>
    </div>
  );
};

export default Solution;
