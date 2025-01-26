import * as React from "react"
import { cn } from "../../lib/utils" // Utility for merging Tailwind classes

// Card component - A basic container with styling
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Merge default card styles with any provided className
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props}
  />
))
Card.displayName = "Card"

// CardContent component - Provides consistent padding for card content
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    // Apply padding with no top padding (pt-0) to allow for card header if needed
    className={cn("p-6 pt-0", className)} 
    {...props} 
  />
))
CardContent.displayName = "CardContent"

export { Card, CardContent } 