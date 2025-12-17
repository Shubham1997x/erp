"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  value: string[];
  onValueChange: (itemValue: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null
);

interface AccordionProps {
  type?: "single" | "multiple";
  value?: string[];
  onValueChange?: (value: string[]) => void;
  className?: string;
  children: React.ReactNode;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", value = [], onValueChange, className, children }, ref) => {
    const handleValueChange = React.useCallback(
      (itemValue: string) => {
        if (!onValueChange) return;

        if (type === "single") {
          onValueChange(value.includes(itemValue) ? [] : [itemValue]);
        } else {
          const newValue = value.includes(itemValue)
            ? value.filter((v) => v !== itemValue)
            : [...value, itemValue];
          onValueChange(newValue);
        }
      },
      [value, onValueChange, type]
    );

    return (
      <AccordionContext.Provider
        value={{ value, onValueChange: handleValueChange, type }}
      >
        <div ref={ref} className={cn("w-full", className)}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) {
      throw new Error("AccordionItem must be used within Accordion");
    }

    const isOpen = context.value.includes(value);

    return (
      <div
        ref={ref}
        className={cn("border-b last:border-b-0", className)}
        data-state={isOpen ? "open" : "closed"}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...(child.props as Record<string, unknown>),
              "data-item-value": value,
              "data-state": isOpen ? "open" : "closed",
            } as any);
          }
          return child;
        })}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) {
      throw new Error("AccordionTrigger must be used within Accordion");
    }

    const itemValue = (props as any)["data-item-value"];
    const isOpen = context.value.includes(itemValue);

    const handleClick = () => {
      if (itemValue) {
        context.onValueChange(itemValue);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={cn(
          "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
          className
        )}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) {
      throw new Error("AccordionContent must be used within Accordion");
    }

    const itemValue = (context as any).currentItemValue;
    const isOpen = itemValue ? context.value.includes(itemValue) : false;

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all",
          isOpen
            ? "animate-accordion-down"
            : "animate-accordion-up max-h-0",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
      >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
