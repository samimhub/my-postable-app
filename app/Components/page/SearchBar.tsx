"use client"

import { useState, useEffect } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {Clipboard, ClipboardList, MessageCircle} from'lucide-react'


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
    <div className="my-">
      <div className="fixed top-0 left-0 right-0 py-6 z-50">
        <div className={`flex font-bold mx-auto transition-all ${
          isExpanded ? 'bg-gray-900 p-2 gap-8 rounded-3xl shadow-lg max-w-2xl' : ' text-white items-center text-2xl max-w-[200px]'
        }`}>
            <div className={`flex justify-center items-center gap-8 font-bold transition-all duration-400 ${
              isExpanded ? 'text-white text-2xl' : 'bg-gray-900 rounded-3xl px-10 py-5 text-white items-center text-2xl'
            }`}>
              <div className={`${isExpanded ? 'hidden px-5':'px-5'}`}>
              <MessageCircle/>
              </div>
              Postable
            </div>
            <div className={`relative flex-grow transition-all ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex justify-between relative max-w-3xl items-center">
                <Input 
                  type="text" 
                  placeholder="Paste tweet link here..."
                  className=" bg-gray-700 hover:bg-gray-600 p-6 text-lg rounded-2xl text-white border-none focus:ring-0"
                />
                <Button 
                  size="sm"
                  className="absolute right-2 gap-1 bg-gray-500 hover:bg-gray-400 font-semibold text-lg text-white"
                ><span>Paste</span>
                  <ClipboardList size={12}/>
                </Button>
              </div>
            </div>
          </div>
         </div>
       </div>
    // </div>
  )
}