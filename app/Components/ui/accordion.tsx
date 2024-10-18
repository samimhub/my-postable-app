import React, { useState, ReactNode } from "react";
import { cn } from "@/app/lib/utils"; // Ensure this is the correct path for your utility function

interface AccordionProps {
  children: ReactNode;
  type?: "single" | "multiple";
  collapsible?: boolean; // Declare collapsible as an optional prop
  className?: string;
}

interface AccordionItemProps {
  value: string;
  collapsible?: boolean; // Declare collapsible here too
  children: ReactNode;
}

interface AccordionTriggerProps {
  children: ReactNode;
  isOpen: boolean; // Required prop
  onClick: () => void; // Required prop
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
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { collapsible }); // Pass collapsible prop
        }
        return null; // Return null for non-valid elements
      })}
    </div>
  );
}

export function AccordionItem({
  value,
  collapsible = false,
  children,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    if (collapsible || !isOpen) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="border-b border-gray-200">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === AccordionTrigger) {
            return React.cloneElement(child, { onClick: toggleItem, isOpen }); // Pass isOpen and onClick
          }
          if (child.type === AccordionContent) {
            return isOpen ? child : null; // Render content only if isOpen
          }
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
      <span>{isOpen ? "-" : "+"}</span> {/* Toggle icon based on isOpen */}
    </button>
  );
}

export function AccordionContent({ children }: AccordionContentProps) {
  return <div className="p-4 text-gray-600">{children}</div>;
}
