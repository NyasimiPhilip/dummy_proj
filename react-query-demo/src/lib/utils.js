import { clsx } from "clsx" // Utility for constructing className strings
import { twMerge } from "tailwind-merge" // Utility for merging Tailwind classes safely

// Utility function that combines clsx and tailwind-merge
// This allows us to:
// 1. Conditionally join classNames with clsx
// 2. Properly merge Tailwind classes without conflicts using twMerge
export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 