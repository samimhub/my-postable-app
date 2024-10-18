"use client"
import { useRouter } from "next/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { faqItems } from "@/app/Data/constant"



export default function FAQ() {
  const router = useRouter()

  const handleAskQuestion = () => {
    // Replace this URL with your actual Google Form URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfg4dQ970E8Z54hZzbXDJ0DPjuvpm2RRjsPxph9txMFSJvjlw/viewform'
    window.open(googleFormUrl, '_blank')
  }
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">FAQ</h1>
      <p className="text-xl mb-6">
        Let's help you with some of your frequently asked questions.
      </p>
        <Button 
        variant="link"
        onClick={handleAskQuestion}
        className="p-0 h-auto font-normal">
          Ask a Question →
        </Button>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}