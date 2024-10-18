import Image from "next/image";
import { Button } from "../ui/button";

export default function OneClickCreate() {
  return (
    <section className="bg-black min-h-screen space-y-10 text-white py-20 rounded-[45px]">
      <div className="max-w-6xl mx-auto p-6 space-y-10 text-center">
        {/* Heading */}
        <h1 className="text-7xl font-bold">One-Click to Create</h1>

        {/* Subheading */}
        <p className="text-lg flex justify-center items-center max-w-md mx-auto">
          Postable is built with simplicity and fun at its core. No design skills? No problem. 
          We handle the heavy lifting so you can effortlessly create stunning posts.
        </p>

        {/* Call-to-Action Button */}
        <div className="">
          <a
            href="#"
            className="inline-block font-semibold rounded-md shadow-md hover:bg-gray-700 transition"
          >
           <Button className='bg-black text-white p-4 text-center text-lg rounded-3xl-sm w-[180px]'>Get Started for Free</Button>
          </a>
        </div>

        {/* Image Section (Empty Placeholder) */}
        <div className="">
          <div className="relative mx-auto w-full max-w-7xl max-h-screen -bottom-10">
            <Image 
            src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727020129/app-screenshot_uficxp.webp" width={960} height={480} alt="backImage" />
          </div>
        </div>
      </div>
    </section>
  );
}
