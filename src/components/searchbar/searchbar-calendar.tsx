import { useEffect, useState } from "react"
import { type DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { getDateMonth } from "@/lib/utils"

interface SearchBarCalendar {
  label: string
  placeholder: string
  onSelectedRange: (range: Date[]) => void
}

export function SearchBarCalendar({ label, placeholder, onSelectedRange }: SearchBarCalendar) {
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>()

  useEffect(() => {
    if (rangeDate?.from && rangeDate?.to) {
      onSelectedRange([rangeDate.from, rangeDate.to])
    }
  }, [rangeDate, onSelectedRange])

  function handleSelect(selectedDay: Date) {
    if (!rangeDate?.from) {
      setRangeDate({ from: selectedDay, to: undefined })
      return
    } else if (rangeDate?.from && rangeDate?.to) {
      setRangeDate({ from: selectedDay, to: undefined })
      return
    } else if (rangeDate?.from && !rangeDate?.to && selectedDay > rangeDate.from) {
      setRangeDate({ from: rangeDate.from, to: selectedDay })
      return
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center py-3 px-6 hover:bg-neutral-200/50 rounded-full hover:cursor-pointer">
          <div className="flex flex-col">
            <span className="text-xs font-semibold capitalize">{label}</span>
            <span className="text-neutral-500 text-sm font-medium">
              {rangeDate?.from ? `${getDateMonth(rangeDate.from)}` : placeholder}
              {rangeDate?.to ? ` - ${getDateMonth(rangeDate.to)}` : ""}
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit" sideOffset={12}>
        <Calendar
          min={1}
          mode="range"
          numberOfMonths={2}
          selected={rangeDate}
          onDayClick={handleSelect}
          disabled={(date) => date < new Date()}
        />
      </PopoverContent>
    </Popover>
  )
}
