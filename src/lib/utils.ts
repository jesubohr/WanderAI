import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDateMonth(date: Date) {
  return Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date)
}
