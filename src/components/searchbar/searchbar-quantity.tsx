import { type Quantity } from "@/components/types"
import { useEffect, useState } from "react"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "../ui/button"

interface SearchBarQuantityProps {
  label: string
  placeholder: string
  onSelectedQuantity: (quantity: Quantity) => void
}

type Category = keyof Quantity
const initialQuantity: Quantity = { adults: 0, children: 0, infants: 0, pets: 0 }
const categoryDescriptions = {
  adults: "Age 13 or above",
  children: "Age 2-12",
  infants: "Under 2",
  pets: "Pets"
}

export function SearchBarQuantity({ label, placeholder, onSelectedQuantity }: SearchBarQuantityProps) {
  const [quantity, setQuantity] = useState<Quantity>(initialQuantity)
  const totalQuantity = Object.values(quantity).reduce((acc, curr) => acc + curr, 0)

  useEffect(() => {
    if (totalQuantity > 0) onSelectedQuantity(quantity)
  }, [quantity, totalQuantity, onSelectedQuantity])

  function handleIncrease(category: Category) {
    setQuantity((prev) => ({ ...prev, [category]: prev[category] + 1 }))
  }

  function handleDecrease(category: Category) {
    setQuantity((prev) => ({ ...prev, [category]: prev[category] - 1 }))
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center py-3 px-6 w-56 hover:bg-neutral-200/50 rounded-full hover:cursor-pointer">
          <div className="flex flex-col">
            <span className="text-xs font-semibold capitalize">{label}</span>
            <span className="text-neutral-500 text-sm font-medium">
              {totalQuantity > 0 ? `${totalQuantity} ${totalQuantity > 1 ? "guests" : "guest"}` : placeholder}
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit" sideOffset={12}>
        <ul className="flex flex-col gap-4 divide-y py-1 px-4">
          {Object.entries(quantity).map(([category, quantity], index) => (
            <li key={index} className="flex items-center justify-between first:pt-0 pt-4 w-72">
              <div>
                <h6 className="font-semibold capitalize">{category}</h6>
                <p className="text-sm text-neutral-500">{categoryDescriptions[category as Category]}</p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8 text-neutral-500 rounded-full hover:border-neutral-800"
                  onClick={() => handleDecrease(category as Category)}
                  disabled={quantity === 0}
                >
                  <span className="sr-only">Decrease</span>
                  <IconMinus size={16} />
                </Button>
                <span>{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8 text-neutral-500 rounded-full hover:border-neutral-800"
                  onClick={() => handleIncrease(category as Category)}
                >
                  <span className="sr-only">Increase</span>
                  <IconPlus size={16} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
