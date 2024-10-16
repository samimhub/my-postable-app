"use client"

import { processCard } from "@/app/Data/constant"
import Image from "next/image"

function WorkingProcess() {
  return (
    <section>
      <div>
      <h1>How to work?</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {processCard.map((card) => (
          <div key={card.id} className="w-full max-w-sm">
            <div>
              <Image src={card.img} alt="card image" width={120} height={120}/>
            </div>
            <div className="space-y-4">
              <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-sm font-medium text-muted-foreground">STEP {card.id}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
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

