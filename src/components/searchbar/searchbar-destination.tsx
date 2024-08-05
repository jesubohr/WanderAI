import { useEffect, useState } from "react"

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
    <div className="flex items-center py-3 px-8 hover:bg-neutral-200/50 rounded-full hover:cursor-pointer">
      <div className="flex flex-col">
        <span className="text-xs font-semibold capitalize">{label}</span>
        <input
          className="bg-transparent text-sm font-medium focus:outline-none placeholder:text-neutral-500"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
