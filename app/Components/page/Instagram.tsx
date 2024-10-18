"use client"

import { FacebookIcon, InstagramIcon } from "lucide-react"
import {motion} from 'framer-motion'


export default function Instagram() {
  return (
    <div className="w-full max-w-xl mx-auto p-1 relative">
      {/* First card */}
      <motion.div
      animate={{rotate:[ -15, 4]}}
      className="overflow-hidden rounded-3xl bg-gradient-to-br from-pink-400 via-blue-500 to-teal-400 shadow-lg absolute inset-0 rotate-3 opacity-75">
        <div className="bg-white/10 backdrop-blur-sm rounded-t-2xl px-6 py-3 flex items-center space-x-2">
          <InstagramIcon className="w-4 h-4 text-white" />
          <span className="text-xs font-medium text-white">LinkedIn post</span>
        </div>
        <div className="bg-gradient-to-br from-pink-400 via-blue-500 to-teal-400 p-8 rounded-b-2xl flex items-center justify-center min-h-[450px]">
          <div className="bg-white rounded-3xl p-4 shadow-md w-full max-w-lg">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  <span>Postable </span>
                  <span></span>
                </p>
                <p className="text-xs text-gray-500">@postableapp</p>
              </div>
            </div>
            <p className="text-sm text-gray-900 font-semibold mb-2">
              Sharing your tweets across multiple platforms made easy. Postable
              helps you creating engaging visuals.
            </p>
            <p className="text-xs text-gray-500">9:12 PM · Jul 22, 2024</p>
          </div>
        </div>
      </motion.div>

      {/* Second card */}
      <motion.div
      animate={{rotate:[ 15, 0] }}
       className="overflow-hidden rounded-3xl bg-gradient-to-br from-pink-400 via-blue-500 to-teal-400 shadow-lg relative z-10">
        <div className="bg-white/10 backdrop-blur-sm border-1 border-b rounded-t-2xl px-6 py-3 flex items-center space-x-2">
          <InstagramIcon className="w-4 h-4 text-white" />
          <span className="text-xs font-medium text-white">LinkedIn post</span>
        </div>
        <div className="bg-gradient-to-br from-pink-400 via-blue-500 to-teal-400 p-8 rounded-b-2xl flex items-center justify-center min-h-[450px]">
          <div className="bg-white rounded-3xl p-4 shadow-md w-full max-w-lg">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  <span>Postable </span>
                  <span></span>
                </p>
                <p className="text-xs text-gray-500">@postableapp</p>
              </div>
            </div>
            <p className="text-sm text-gray-900 font-semibold mb-2">
              Sharing your tweets across multiple platforms made easy. Postable
              helps you creating engaging visuals.
            </p>
            <p className="text-xs text-gray-500">9:12 PM · Jul 22, 2024</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}