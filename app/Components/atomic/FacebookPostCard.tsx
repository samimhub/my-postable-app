
import { Facebook } from "lucide-react"

export default function FacebookPostCard() {
  return (
    <div className="w-64 h-40 rounded-3xl bg-gradient-to-r from-teal-400 via-green-300 to-blue-300 shadow-lg transform rotate-3 relative">
      <div className="absolute flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
        <Facebook className="w-3 h-3 text-white p-" />
        <span className="text-xs font-medium text-white">Facebook Post</span>
      </div>
    </div>
  )
}