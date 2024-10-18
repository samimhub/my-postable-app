import React, { useState, ReactNode, ReactElement } from "react";
import { cn } from "@/app/lib/utils";

interface AccordionProps {
  children: ReactElement<AccordionItemProps>[]; // Expecting an array of AccordionItems
  type?: "single" | "multiple"; // Not used, can be removed if not needed
  collapsible?: boolean;
  className?: string;
}

interface AccordionItemProps {
  value: string; // This should be used, can remove if not needed
  collapsible?: boolean;
  children: ReactNode; // Can include any ReactNode, but we will check types inside AccordionItem
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
  value, // This can be used to identify or log the item if needed
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
          return isOpen ? child : null; // Only render if isOpen
        }
        return child; // Return any other children
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
      <span>{isOpen ? "-" : "+"}</span> {/* Show "-" if open, "+" if closed */}
    </button>
  );
}

export function AccordionContent({ children }: AccordionContentProps) {
  return <div className="p-4 text-gray-600">{children}</div>;
}
