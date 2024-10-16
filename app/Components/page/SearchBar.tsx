"use client"

import { useState, useEffect } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'


export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsExpanded(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-[200vh]">
      <div className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className={`mx-auto transition-all duration-500 ease-in-out ${
          isExpanded ? 'bg-gray-900 rounded-full shadow-lg max-w-3xl' : 'max-w-[200px]'
        }`}>
          <div className={`flex items-center transition-all duration-500 ease-in-out ${
            isExpanded ? 'px-6 py-3' : 'justify-center py-2'
          }`}>
            <div className={`font-bold transition-all duration-500 ease-in-out ${
              isExpanded ? 'text-white text-xl mr-4' : 'text-gray-900 text-2xl'
            }`}>
              Postable
            </div>
            <div className={`flex-grow transition-all duration-500 ease-in-out ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Paste tweet link here..."
                  className="w-full bg-gray-800 text-white border-none focus:ring-0"
                />
                <Button 
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white"
                >
                  Paste
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}