import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, LogOut } from "lucide-react"
import Tabs from "@/pages/MiniCOP/nav"
import ActionSearchBar from "@/pages/MiniCOP/searchbar"

export default function AirbnbHome() {
  const [date, setDate] = useState(new Date())

  const listings = [
    {
      id: 1,
      title: "Cozy Loft in New York",
      location: "New York, USA",
      price: "$180/night",
      rating: 4.8,
      image: "https://source.unsplash.com/featured/?apartment,loft"
    },
    {
      id: 2,
      title: "Modern Apartment in Tokyo",
      location: "Tokyo, Japan",
      price: "$120/night",
      rating: 4.6,
      image: "https://source.unsplash.com/featured/?tokyo,apartment"
    },
    {
      id: 3,
      title: "Beachfront Villa in Bali",
      location: "Bali, Indonesia",
      price: "$250/night",
      rating: 4.9,
      image: "https://source.unsplash.com/featured/?bali,villa"
    },
    {
      id: 4,
      title: "Mountain Cabin in Switzerland",
      location: "Zermatt, Switzerland",
      price: "$300/night",
      rating: 4.7,
      image: "https://source.unsplash.com/featured/?cabin,mountain"
    },
    {
      id: 5,
      title: "Artistic Flat in Paris",
      location: "Paris, France",
      price: "$200/night",
      rating: 4.5,
      image: "https://source.unsplash.com/featured/?paris,flat"
    },
    {
      id: 6,
      title: "Lake House in Canada",
      location: "Ontario, Canada",
      price: "$150/night",
      rating: 4.4,
      image: "https://source.unsplash.com/featured/?lakehouse,canada"
    },
    {
      id: 7,
      title: "Desert Dome in Arizona",
      location: "Arizona, USA",
      price: "$220/night",
      rating: 4.3,
      image: "https://source.unsplash.com/featured/?desert,dome"
    },
    {
      id: 8,
      title: "Urban Studio in Berlin",
      location: "Berlin, Germany",
      price: "$130/night",
      rating: 4.2,
      image: "https://source.unsplash.com/featured/?berlin,studio"
    }
  ]

  const categories = ["Popular", "Beach", "Mountain", "City", "Cabin", "Unique"]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 z-50 bg-black flex items-center justify-between px-6 py-4 border-b border-white">
        <h1 className="text-3xl font-bold tracking-tight text-white">RENTEAZY</h1>
        <div className="flex items-center gap-4">
          <Tabs />
          <ActionSearchBar />
        </div>
        <Button variant='ghost'> <LogOut /></Button>
      </header>

      <nav className="flex flex-wrap gap-4 px-6 py-4 border-b border-white text-white bg-black">
        {categories.map((cat, index) => (
          <Button key={index} variant="ghost" className="text-white hover:bg-white hover:text-black text-sm">
            {cat}
          </Button>
        ))}
      </nav>

      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing, index) => (
          <Card
            key={listing.id}
            className={`bg-neutral-900 border border-white rounded-xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105 ${index === 2 || index === 5 ? "col-span-1 sm:col-span-2 row-span-2" : ""}`}
          >
            <CardHeader className="p-0">
              <img
                src={listing.image}
                alt={listing.title}
                className={`w-full ${index === 2 || index === 5 ? "h-72" : "h-48"} object-cover`} />
            </CardHeader>
            <CardContent className="p-4 text-white">
              <CardTitle className="text-lg text-white">{listing.title}</CardTitle>
              <p className="text-sm text-white/80">{listing.location}</p>
              <div className="flex items-center justify-between mt-2 text-white">
                <span>{listing.price}</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white text-white" />
                  {listing.rating}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="p-6 border-t border-white text-center text-sm text-white bg-black">
        © 2025 Airbnb Clone. All rights reserved.
      </footer>
    </div>
  )
}
