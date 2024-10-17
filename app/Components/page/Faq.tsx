"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { faqItems } from "@/app/Data/constant"



export default function FAQ() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">FAQ</h1>
      <p className="text-xl mb-6">
        Let's help you with some of your frequently asked questions.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Couldn't find your answer?{" "}
        <Button variant="link" className="p-0 h-auto font-normal">
          Ask a Question →
        </Button>
      </p>
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