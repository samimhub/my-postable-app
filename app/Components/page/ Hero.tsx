"use client"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

function  Hero() {
  return (
    <section>
        <h1>Convert Tweets into Engaging Social Media Posts, Instantly!</h1>
        <h1>Paste your tweet link below to get started for FREE</h1>
      <div>
        <div>
            <Input 
            type="text" 
            placeholder="Paste tweet link here..."
            className="w-full bg-gray-800 text-white border-none focus:ring-0"/>
            <Button
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white"/>
            </div>
            <h1>No signup, no credit card, no crap!</h1>
      </div>
    </section>
  )
}

export default  Hero
