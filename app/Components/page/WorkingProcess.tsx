"use client"

import { processCard } from "@/app/Data/constant"
import Image from "next/image"

function WorkingProcess() {
  return (
    <section className="py-10">
      <div className="max-w-5xl m-auto">
      <h1 className="text-5xl font-bold py-4">How it work?</h1>
      <div className="grid gap-6 md:grid-cols-3 ">
        {processCard.map((card) => (
          <div key={card.id} className="rounded-xl hover:animate-shake bg-slate-200">
            <div className=" w-full p-1">
              <Image src={card.img} alt="card image" width={250} height={120}/>
            </div>
            <div className="space-y-6 p-8">
              <div>
              <h1 className="text-sm text-black font-medium text-muted-foreground">STEP {card.id}</h1>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default WorkingProcess

