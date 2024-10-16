"use client"

import React, { useState } from 'react';
import { Button } from '../ui/button';
import IndividualsSolution from './IndividualsSolution';
import InfluencersSolution from './InfluencersSolution';
import BusinessesSolution from './BusinessesSolution';
import Instagram from './Instagram';
import Linkedin from './Linkedin';
import Facebook from './Facebook';


// Dummy components for example

const CourseFeatures = () => {
  const [activeComponent, setActiveComponent] = useState<number>(1);

  const handleToggle = (component: number) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col items-center">
        <h1>Share Your Voice Beyond Just a Tweet</h1>
        <h1>Keep your online presence steady and growing by creating customizable images from your tweets, perfect for Instagram, Facebook, and more.</h1>
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
        <Button>more+</Button>
      </div>
      
      <div className="w-full flex justify-center items-center text-center">
        {activeComponent === 1 && <Instagram/>}
        {activeComponent === 2 && <Linkedin/>}
        {activeComponent === 3 && <Facebook/>}
      </div>
    </div>
  );
};

export default CourseFeatures;
