'use client'

import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import FacebookPostCard from "../atomic/FacebookPostCard"
import InstagramPostCard from "../atomic/InstagramPostCard"
import LinkedinPostCard from "../atomic/LinkedinPostCard"
import InstagramStoryCard from "../atomic/InstagramStoryCard"

function SocialOptimization() {
    return (
        <section>
            <div className="max-w-5xl mx-auto space-y-4">
                <h1 className="text-5xl font-bold">Optimized for all social media</h1>
                <div className="flex justify-start items-start gap-14">
                    <p className="max-w-md">We've meticulously designed each template to meet the specific guidelines and format requirements of all social media platforms.
                        By preserving safe zones and adhering to platform standards, we ensure that your posts will always be visually striking, no matter where you share them.</p>
                    <div className="space-x-4">
                    <ul className="space-y-4">
            {["Readable", "Visible", "Accessible"].map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
                    </div>
                </div>
                <div className="flex py-4">
                    <div className="relative w-full max-w-2xl mx-auto h-64 flex items-center justify-center">
                        <div className="absolute left-0 transform -translate-x-1/4">
                            <LinkedinPostCard />
                        </div>
                        <div className="absolute left-1/4 transform -translate-x-1/4">
                            <InstagramStoryCard />
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/4">
                            <FacebookPostCard />
                        </div>
                        <div className="absolute right-0 transform -translate-x-1/4">
                            <InstagramPostCard />
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    </div>
                </div>
                <div className="text-xl font-bold max-w-sm">
                    <span className="text-gray-400">We help you create postable content that not only looks great but also</span> engages your audience.</div>
                <div className="flex">
                    <Button variant='ghost'>Get Started for free </Button>
                    <ArrowRight />
                </div>
            </div>
        </section>
    )
}

export default SocialOptimization
