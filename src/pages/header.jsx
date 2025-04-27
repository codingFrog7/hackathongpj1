"use client";

import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Tabs from "./MiniCOP/nav";
import ActionSearchBar from "./MiniCOP/searchbar";
import UserProfile from "./UserProfile"; // Make sure you import this correctly

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-20 px-6 bg-black border-b-4 flex items-center justify-between rounded-b-2xl z-50">
      {/* Logo */}
      <div className="text-white font-['Fliege_Mono'] font-extrabold text-xl border-8 leading-4 p-1 border-white">
        RENT<br />EAZY
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <Tabs />
        <ActionSearchBar />

        {/* User Profile Popup */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="text-black bg-white hover:bg-white/10 hover:text-white ">
              <User />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white p-0 max-w-lg rounded-2xl overflow-hidden">
            <UserProfile />
          </DialogContent>
        </Dialog>
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
        </div>
      )}
    </div>
  );
}
