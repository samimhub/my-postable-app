"use client"

import React, { useState } from 'react';
import { Button } from '../ui/button';
import IndividualsSolution from './IndividualsSolution';
import InfluencersSolution from './InfluencersSolution';
import BusinessesSolution from './BusinessesSolution';


// Dummy components for example

const CourseFeatures = () => {
  const [activeComponent, setActiveComponent] = useState<number>(1);

  const handleToggle = (component: number) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 space-x-4 bg-slate-50 border border-sky-200 rounded p-1">
        <Button 
          className={`px-4 py-2 text-orange-800 text-lg font-semibold cursor-pointer rounded ${activeComponent === 1 ? 'bg-orange-300 border border-orange-300' : ''}`}
          onClick={() => handleToggle(1)}
        >
           Individuals
        </Button>
        <Button 
          className={`px-4 py-2 text-orange-800 text-lg font-semibold cursor-pointer rounded ${activeComponent === 2 ? 'bg-green-500' : ''}`}
          onClick={() => handleToggle(2)}
        >
          Influencers
        </Button>
        <Button 
          className={`px-4 py-2 text-orange-800 text-lg font-semibold cursor-pointer rounded ${activeComponent === 2 ? 'bg-green-500' : ''}`}
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
    <Button className='bg-orange-400 p-4 text-center text-lg rounded-sm w-[180px]'>Try a class</Button>
    </div>
    </div>
  );
};

export default CourseFeatures;
