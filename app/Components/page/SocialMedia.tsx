"use client"
import { useState } from "react";
import { Button } from "../ui/button"
import Facebook from "./Facebook";
import Linkedin from "./Linkedin";
import Instagram from "./Instagram";
import { FacebookIcon, InstagramIcon } from "lucide-react";


export default function ShareVoice() {
  const [activeComponent, setActiveComponent] = useState<number>(1);

  const handleToggle = (component: number) => {
    setActiveComponent(component);
  };
  return (
    <section className="relative max-w-screen-lg mx-auto bg-top flex flex-col items-center justify-center sm:mb-16 sm:rounded-[32px] md:mb-24  md:px-12 lg:px-24 lg:pt-12">
        <header className=" px-4 w-full bg-gradient-to-br from-pink-400 via-blue-500 to-teal-400 text-white pt-8 space-y-8 rounded-[16px] md:rounded-[64px] shadow-xl">
            <h2 className="font-semibold mx-auto text-balance text-center text-2xl leading-[28px] text-white sm:max-w-md sm:text-3xl sm:leading-[36px] md:max-w-2xl md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[54px]"
            >
              Share Your Voice Beyond Just a Tweet
            </h2>
            <p className="mx-auto my-4 text-balance text-center text-sm font-normal leading-[18px] text-white sm:my-5 sm:max-w-sm md:my-8 md:max-w-xl md:text-base lg:my-12 lg:text-lg">
              Keep your online presence steady and growing by creating customizable images from your tweets,
              perfect for Instagram, Facebook, and more.
            </p>
            
            <div className="flex justify-center items-center">
        <Button 
          className={`px-4 gap-1 py-1 text-md font-semibold cursor-pointer rounded-xl ${activeComponent === 1 ? 'bg-black/30 hover:scale-105 active:scale-95"' : 'hover:scale-105 hover:duration-300'}`}
          onClick={() => handleToggle(1)}
        >
        <FacebookIcon size={12}/>
          Facebook Story
        </Button>
        <Button 
          className={`px-4 gap-1 py-1 text-md font-semibold cursor-pointer rounded-xl ${activeComponent === 2 ? 'bg-black/30 hover:scale-105 active:scale-95' : 'hover:scale-105 hover:duration-300'}`}
          onClick={() => handleToggle(2)}
        >
        <InstagramIcon size={12}/>
          Instagram Post
        </Button>
        <Button 
          className={`px-4 gap-1 py-2 text-lg font-semibold cursor-pointer rounded-xl ${activeComponent === 3 ? 'bg-black/30 hover:scale-105 active:scale-95' : 'hover:scale-105 hover:duration-300'}`}
          onClick={() => handleToggle(3)}
        >
        <InstagramIcon size={12}/>
          Linkedin Post
        </Button>
        <Button>+ more</Button>
      </div>
      <div className="relative w-full flex justify-center mt-8">
        {activeComponent === 1 && 
        <div className="relative -bottom-14 md:w-3/4 md:p-4 rounded-2xl">
            <Facebook/>
        </div>
        
        }
        {activeComponent === 2 &&
        <div className="relative -bottom-14 md:w-3/4  md:p-4 rounded-2xl">
          <Instagram/>
        </div> 
        }
        {activeComponent === 3 && 
        <div className="relative -bottom-14 md:w-3/4 md:p-4 rounded-2xl">
          <Linkedin/>
        </div>
        }
      </div>
          </header>
    </section>
  )
}