import { useEffect, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { REGIONS } from "@/lib/consts"

interface SearchBarDestinationProps {
  label: string
  placeholder: string
  onSelectedDestination: (destination: string) => void
}

export function SearchBarDestination({ label, placeholder, onSelectedDestination }: SearchBarDestinationProps) {
  const [destination, setDestination] = useState("")

  useEffect(() => {
    onSelectedDestination(destination)
  }, [destination, onSelectedDestination])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center py-3 px-8 hover:bg-neutral-200/50 rounded-full hover:cursor-pointer">
          <div className="flex flex-col">
            <span className="text-xs font-semibold capitalize">{label}</span>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-transparent text-sm font-medium focus:outline-none placeholder:text-neutral-500"
              placeholder={placeholder}
            />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit" align="start" sideOffset={12}>
        <div className="py-1 px-4 space-y-4">
          <h3 className="text-neutral-800 text-sm font-semibold">Search by region</h3>
          <div className="grid grid-cols-3 gap-4">
            {
              REGIONS.map((region) => (
                <button
                  key={region}
                  onClick={() => setDestination(region)}
                  className="w-28 aspect-[4/5] p-2 bg-transparent hover:bg-neutral-200/70 rounded-lg text-left text-sm font-medium focus:outline-none transition-colors"
                >
                  <div className="mb-2 w-24 aspect-square border border-neutral-300 rounded-md"></div>
                  <span>{region}</span>
                </button>
              ))
            }
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
