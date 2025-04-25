import { useState } from 'react'
import { LogOut, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Tabs from './MiniCOP/nav'
import ActionSearchBar from './MiniCOP/searchbar'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full h-20 px-6 bg-black flex items-center justify-between z-50">
      {/* Logo */}
      <div className="text-white font-extrabold text-2xl">WEBAGE</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Tabs />
        <ActionSearchBar />
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <LogOut />
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black px-6 py-4 flex flex-col gap-4 md:hidden border-t border-white">
          <Tabs />
          <ActionSearchBar />
          <Button variant="ghost" className="text-white w-fit hover:bg-white/10">
            <LogOut />
          </Button>
        </div>
      )}
    </div>
  )
}
