import React, { useState, ReactNode } from "react"
import { cn } from "@/app/lib/utils"

interface AccordionProps {
  children: ReactNode;
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
}

interface AccordionItemProps {
  value: string;
  collapsible?: boolean;
  children: ReactNode;
}

interface AccordionTriggerProps {
  children: ReactNode;
  isOpen: boolean;
  onClick?: () => void;
}

interface AccordionContentProps {
  children: ReactNode;
}

export function Accordion({
  children,
  type = "multiple",
  collapsible = false,
  className = "",
}: AccordionProps) {
  return (
    <div className={cn("accordion", className)}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { collapsible }) // Pass collapsible prop to AccordionItem
      )}
    </div>
  )
}

export function AccordionItem({ value, collapsible = false, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleItem = () => {
    if (collapsible || !isOpen) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="border-b border-gray-200">
      {React.Children.map(children, (child: any) => {
        if (child.type === AccordionTrigger) {
          return React.cloneElement(child, { onClick: toggleItem, isOpen }) // Pass isOpen state here
        }
        if (child.type === AccordionContent) {
          return isOpen && child
        }
        return child
      })}
    </div>
  )
}

export function AccordionTrigger({
  children,
  onClick,
  isOpen,
}: AccordionTriggerProps) {
  return (
    <button
      className="w-full flex justify-between items-center p-4 font-semibold text-left"
      onClick={onClick}
    >
      <span>{children}</span>
      <span>{isOpen ? "-" : "+"}</span> {/* Show "-" if open, "+" if closed */}
    </button>
  )
}

export function AccordionContent({ children }: AccordionContentProps) {
  return <div className="p-4 text-gray-600">{children}</div>
}
