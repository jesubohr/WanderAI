"use client"

import { type Quantity } from "@/components/types"
import { IconSearch } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { SearchBarDestination } from "./searchbar-destination"
import { SearchBarCalendar } from "./searchbar-calendar"
import { SearchBarQuantity } from "./searchbar-quantity"

interface SearchBarProps {
  className?: string
}

export default function SearchBar({ className = "" }: SearchBarProps) {
  function handleSelectedDestination(destination: string) {
    console.log(destination)
  }

  function handleSelectedRange(range: Date[]) {
    console.log(range)
  }

  function handleSelectedQuantity(quantity: Quantity) {
    console.log(quantity)
  }

  return (
    <div className={cn("mx-auto max-w-fit", className)}>
      <div className="relative flex items-center border bg-card drop-shadow-md rounded-full">
        <SearchBarDestination label="Location" placeholder="Search destinations" onSelectedDestination={handleSelectedDestination} />
        <SearchBarCalendar label="Check in-out" placeholder="Add dates" onSelectedRange={handleSelectedRange} />
        <SearchBarQuantity label="Who" placeholder="Add guests" onSelectedQuantity={handleSelectedQuantity} />
        <Button size="icon" className="absolute right-3 rounded-full bg-malibu-500 hover:bg-malibu-600 text-white">
          <IconSearch size={20} />
        </Button>
      </div>
    </div>
  )
}
