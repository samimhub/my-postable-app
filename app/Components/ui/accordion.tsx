import React, { useState, ReactNode, ReactElement } from "react";
import { cn } from "@/app/lib/utils";

interface AccordionProps {
  children: ReactElement<AccordionItemProps>[]; 
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
  collapsible = false,
  className = "",
}: AccordionProps) {
  return (
    <div className={cn("accordion", className)}>
      {React.Children.map(children, (child) => 
        React.cloneElement(child as React.ReactElement<AccordionItemProps>, { collapsible }) // Explicitly passing collapsible
      )}
    </div>
  );
}

export function AccordionItem({
  collapsible = false,
  children,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    if (collapsible || !isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="border-b border-gray-200">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AccordionTrigger) {
          return React.cloneElement(child as React.ReactElement<AccordionTriggerProps>, {
            onClick: toggleItem,
            isOpen,
          });
        }
        if (React.isValidElement(child) && child.type === AccordionContent) {
          return isOpen ? child : null;
        }
        return child; 
      })}
    </div>
  );
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
      <span>{isOpen ? "-" : "+"}</span> 
    </button>
  );
}

export function AccordionContent({ children }: AccordionContentProps) {
  return <div className="p-4 text-gray-600">{children}</div>;
}
