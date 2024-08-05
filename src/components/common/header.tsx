import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import SearchBar from "@/components/searchbar"

export default function Header() {
  return (
    <header className="py-4 pb-6 w-full border-b">
      <nav className="flex items-center justify-between h-full mb-4 px-20">
        <Link href="/" className="flex items-center gap-2 text-malibu-500 font-semibold tracking-tighter text-2xl">
          <Image width={32} height={32} src="/logo.svg" alt="A plane around the globe" />
          WanderAI
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="/logo.svg" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="font-semibold">Sign Up</DropdownMenuItem>
            <DropdownMenuItem>Log In</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Help Center</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <SearchBar />
    </header>
  )
}
