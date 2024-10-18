
import React from 'react'

function IndividualsSolution() {
  return (
    <section className="max-w-sm mx-auto space-y-4">
    <div className="flex flex-col">
      <p >Postable is perfect for individuals who want to elevate their social media presence without the hassle. 
          Whether you&apos;re sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets.</p>
      <div>
      <ul className="space-y-2">
            {["Quick Post Creation", "Boosted Follower Engagement", "Consistent Multi-Platform Presence", "Content Diversification"].map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
      </div>
      </div>
  </section>
  )
}

export default IndividualsSolution
