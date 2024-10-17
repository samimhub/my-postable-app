"use client"

import { FacebookIcon, LinkedinIcon } from "lucide-react"


export default function Linkedin() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className=" h-[320px] overflow-hidden rounded-3xl bg-gradient-to-br from-pink-400 via-blue-500 to-teal-400 p-1">
        <div className="bg-white/10 backdrop-blur-sm rounded-t-2xl px-4 py-2 flex items-center space-x-2">
          <LinkedinIcon className="w-4 h-4 text-white" />
          <span className="text-xs font-medium text-white">Linkedin post</span>
        </div>
        <div className="bg-white rounded-2xl m-3 p-4 shadow-lg">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 font-bold text-lg">P</span>
            </div>
            <div>
              <p className="font-semibold text-sm">Postable</p>
              <p className="text-xs text-gray-500">@postableapp</p>
            </div>
          </div>
          <p className="text-sm mb-2">
            Sharing your tweets across multiple platforms made easy. Postable helps you creating engaging visuals.
          </p>
          <p className="text-xs text-gray-500">9:42 PM · Jul 22, 2024</p>
        </div>
      </div>
    </div>
  )
}