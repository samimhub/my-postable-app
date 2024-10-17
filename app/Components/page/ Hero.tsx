import { ClipboardList } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function Hero() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-10 mt-12">
      <main className="max-w-3xl w-full space-y-10 mt-24 text-center">
        <h1 className="text-5xl sm:text-5xl md:text-8xl font-bold tracking-wide">
          Convert <span className="relative">
            Tweets
            <span className="absolute left-0 w-full h-3 bg-purple-400 opacity-50 rounded"></span>
          </span> into Engaging Social Media Posts, Instantly!
        </h1>
        
        <p className="text-2xl font-semibold py-5">
          Paste your tweet link below to get started for FREE
        </p>
        
        <div className="flex justify-between relative max-w-3xl items-center">
          <Input
           type="text" 
           className="text-xl p-8 shadow-xl rounded-xl"
           placeholder="Paste tweet link here..." />
          <div className="absolute inline-flex right-3 py-3">
          <Button className=" bg-slate-200 gap-1" type="submit"><span>Paste</span><ClipboardList size={12}/></Button>
          </div>
        </div>
      </main>
      <p className="text-lg text-slate-400 py-3">
          No signup, no credit card, no crap!
        </p>
    </div>
  )
}